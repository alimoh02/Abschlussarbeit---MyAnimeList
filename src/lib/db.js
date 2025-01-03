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
    console.error(error);
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
    console.error(error.message);
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
    console.error(error);
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
    reviews = await collection.find({}).limit(limit).toArray();
    reviews.forEach((review) => {
      review._id = review._id.toString();
    });
  } catch (error) {
    console.error(error);
  }
  return reviews;
}

async function createReview(review) {
  try {
    const collection = db.collection("reviews");
    const result = await collection.insertOne(review);
    return result.insertedId.toString();
  } catch (error) {
    console.error(error.message);
  }
  return null;
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
    console.error(error);
  }
  return profiles;
}

export default {
  getAnimes,
  getAnime,
  getMangas,
  getReviews,
  createReview,
  getProfiles,
};
