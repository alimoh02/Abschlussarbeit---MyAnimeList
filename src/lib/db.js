import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MyAnimeList"); // Select your database

//////////////////////////////////////////
// Animes
//////////////////////////////////////////

// Get all animes
async function getAnimes() {
  let animes = [];
  try {
    const collection = db.collection("animes");

    // Specify a query/filter if needed
    const query = {};

    // Get all objects that match the query
    animes = await collection.find(query).toArray();
    animes.forEach((anime) => {
      anime._id = anime._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return animes;
}

// Get anime by id
async function getAnime(id) {
  let anime = null;
  try {
    const collection = db.collection("animes");
    const query = { _id: new ObjectId(id) }; // Filter by id
    anime = await collection.findOne(query);

    if (!anime) {
      console.log("No anime with id " + id);
      // TODO: error handling
    } else {
      anime._id = anime._id.toString(); // Convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return anime;
}

//////////////////////////////////////////
// Reviews
//////////////////////////////////////////

// Get all reviews
async function getReviews() {
  let reviews = [];
  try {
    const collection = db.collection("reviews");

    // Specify a query/filter if needed
    const query = {};

    // Get all objects that match the query
    reviews = await collection.find(query).toArray();
    reviews.forEach((review) => {
      review._id = review._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return reviews;
}

// Create review
async function createReview(review) {
  try {
    const collection = db.collection("reviews");
    const result = await collection.insertOne(review);
    return result.insertedId.toString(); // Convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete review by id
async function deleteReview(id) {
  try {
    const collection = db.collection("reviews");
    const query = { _id: new ObjectId(id) }; // Filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No review with id " + id);
    } else {
      console.log("Review with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Profiles
//////////////////////////////////////////

// Get all profiles
async function getProfiles() {
  let profiles = [];
  try {
    const collection = db.collection("profiles");

    // Specify a query/filter if needed
    const query = {};

    // Get all objects that match the query
    profiles = await collection.find(query).toArray();
    profiles.forEach((profile) => {
      profile._id = profile._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return profiles;
}

// Create profile
async function createProfile(profile) {
  try {
    const collection = db.collection("profiles");
    const result = await collection.insertOne(profile);
    return result.insertedId.toString(); // Convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Get profile by id
async function getProfile(id) {
  let profile = null;
  try {
    const collection = db.collection("profiles");
    const query = { _id: new ObjectId(id) }; // Filter by id
    profile = await collection.findOne(query);

    if (!profile) {
      console.log("No profile with id " + id);
      // TODO: error handling
    } else {
      profile._id = profile._id.toString(); // Convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return profile;
}

// Export all functions so that they can be used in other files
export default {
  getAnimes,
  getAnime,
  getReviews,
  createReview,
  deleteReview,
  getProfiles,
  createProfile,
  getProfile,
};
