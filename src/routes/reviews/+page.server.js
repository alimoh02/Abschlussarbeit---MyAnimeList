import db from "$lib/db.js";

export async function load() {
  return {
    reviews: await db.getReviews(200), // Limitiert auf 200 Reviews
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteReview(data.get("id"));
    return { success: true };
  },
};
