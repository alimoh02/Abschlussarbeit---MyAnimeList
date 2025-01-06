import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MyAnimeList");

//////////////////////////////////////////
// Animes
//////////////////////////////////////////

async function getAnimes(limit = 200) {
  let animes = [];
  try {
    const collection = db.collection("animes");
    animes = await collection.find({}).limit(limit).toArray();
    animes.forEach((anime) => {
      anime._id = anime._id.toString();
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Animes:", error.message);
  }
  return animes;
}

async function getAnime(id) {
  let anime = null;
  try {
    const collection = db.collection("animes");
    const query = { _id: new ObjectId(id) };
    anime = await collection.findOne(query);
    if (anime) {
      anime._id = anime._id.toString();
    }
  } catch (error) {
    console.error("Fehler beim Abrufen eines Animes:", error.message);
  }
  return anime;
}

//////////////////////////////////////////
// Mangas
//////////////////////////////////////////

async function getMangas(limit = 200) {
  let mangas = [];
  try {
    const collection = db.collection("mangas");
    mangas = await collection.find({}).limit(limit).toArray();
    mangas.forEach((manga) => {
      manga._id = manga._id.toString();
      if (typeof manga.genres === "string") {
        manga.genres = manga.genres.split(",").map((genre) => genre.trim());
      }
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Mangas:", error.message);
  }
  return mangas;
}

//////////////////////////////////////////
// Reviews
//////////////////////////////////////////

async function getReviews(limit = 200) {
  let reviews = [];
  try {
    const collection = db.collection("reviews");

    reviews = await collection
      .aggregate([
        {
          $lookup: {
            from: "animes", // Verknüpfung mit der Animes-Sammlung
            localField: "anime_uid", // Das Feld in der Reviews-Sammlung
            foreignField: "uid", // Das Feld in der Animes-Sammlung
            as: "anime_details",
          },
        },
        {
          $unwind: {
            path: "$anime_details",
            preserveNullAndEmptyArrays: true, // Beibehalten, auch wenn kein Anime gefunden wird
          },
        },
        {
          $project: {
            profile: 1,
            anime_uid: 1,
            score: 1,
            text: 1,
            anime_name: "$anime_details.title", // Titel des Animes wird hinzugefügt
          },
        },
      ])
      .limit(limit)
      .toArray();

    // Duplikate anhand einer Kombination von Feldern entfernen (z. B. anime_uid + profile)
    const seen = new Set();
    reviews = reviews.filter((review) => {
      const uniqueKey = `${review.anime_uid}-${review.profile}`;
      if (seen.has(uniqueKey)) {
        return false;
      }
      seen.add(uniqueKey);
      return true;
    });

    reviews.forEach((review) => {
      review._id = review._id.toString();
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Reviews:", error.message);
  }
  return reviews;
}


async function createReview(review) {
  try {
    const collection = db.collection("reviews");
    const result = await collection.insertOne(review);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Fehler beim Erstellen des Reviews:", error.message);
  }
  return null;
}

async function deleteReview(id) {
  try {
    const collection = db.collection("reviews");
    await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Fehler beim Löschen des Reviews:", error.message);
  }
}

//////////////////////////////////////////
// Profiles
//////////////////////////////////////////

async function getProfiles(limit = 200) {
  let profiles = [];
  try {
    const collection = db.collection("profiles");
    profiles = await collection.find({}).limit(limit).toArray();
    profiles.forEach((profile) => {
      profile._id = profile._id.toString();
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Profile:", error.message);
  }
  return profiles;
}

async function createProfile(profile) {
  try {
    const collection = db.collection("profiles");
    const result = await collection.insertOne(profile);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Fehler beim Erstellen des Profils:", error.message);
  }
  return null;
}

async function deleteProfile(id) {
  try {
    const collection = db.collection("profiles");
    await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Fehler beim Löschen des Profils:", error.message);
  }
}

export default {
  getAnimes,
  getAnime,
  getMangas,
  getReviews,
  createReview,
  deleteReview,
  getProfiles,
  createProfile,
  deleteProfile,
};
