import db from "$lib/db.js";

export async function load() {
  return {
    reviews: await db.getReviews(15), // Limitiert auf 15 Reviews
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteReview(data.get("id"));
    return { success: true };
  },
};
