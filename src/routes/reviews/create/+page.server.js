import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let review = {
      profile: data.get("profile"),
      anime_uid: data.get("anime_uid"),
      score: data.get("score"),
      text: data.get("text"),
    };
    await db.createReview(review);
    return { success: true };
  },
};
