import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MyAnimeList");

//////////////////////////////////////////
// Animes
//////////////////////////////////////////

// Get a limited number of animes
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
  getReviews,
  createReview,
  deleteReview,
  getProfiles,
  createProfile,
};
