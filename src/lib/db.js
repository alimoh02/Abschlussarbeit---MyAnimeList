import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MyAnimeList"); // Select your database

//////////////////////////////////////////
// Animes
//////////////////////////////////////////

// Get a limited number of animes
async function getAnimes(limit = 200) {
  let animes = [];
  try {
    const collection = db.collection("animes");
    animes = await collection
      .find({}, { projection: { title: 1, genre: 1, episodes: 1, score: 1, img_url: 1, uid: 1 } })
      .limit(limit)
      .toArray();
    animes.forEach((anime) => {
      anime._id = anime._id.toString();
    });
  } catch (error) {
    console.error(error);
  }
  return animes;
}

// Get anime by ID
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

// Get a limited number of mangas
async function getMangas(limit = 200) {
  let mangas = [];
  try {
    const collection = db.collection("mangas");
    mangas = await collection
      .find({}, { projection: { title: 1, genres: 1, score: 1, members: 1, main_picture: 1 } })
      .limit(limit)
      .toArray();
    mangas.forEach((manga) => {
      manga._id = manga._id.toString();
    });
  } catch (error) {
    console.error(error);
  }
  return mangas;
}

// Get manga by ID
async function getManga(id) {
  let manga = null;
  try {
    const collection = db.collection("mangas");
    const query = { _id: new ObjectId(id) };
    manga = await collection.findOne(query);
    if (manga) {
      manga._id = manga._id.toString();
    }
  } catch (error) {
    console.error(error.message);
  }
  return manga;
}

//////////////////////////////////////////
// Reviews
//////////////////////////////////////////

// Get a limited number of reviews
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

// Create a review
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

// Delete a review by ID
async function deleteReview(id) {
  try {
    const collection = db.collection("reviews");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 0) {
      console.log(`No review with id ${id}`);
    } else {
      console.log(`Review with id ${id} has been deleted.`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

//////////////////////////////////////////
// Profiles
//////////////////////////////////////////

// Get a limited number of profiles
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

// Create a profile
async function createProfile(profile) {
  try {
    const collection = db.collection("profiles");
    const result = await collection.insertOne(profile);
    return result.insertedId.toString();
  } catch (error) {
    console.error(error.message);
  }
}

export default {
  getAnimes,
  getAnime,
  getMangas,
  getManga,
  getReviews,
  createReview,
  deleteReview,
  getProfiles,
  createProfile,
};
