import db from "$lib/db.js";

export async function load() {
  return {
    reviews: await db.getReviews(),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteReview(data.get("id"));
    return { success: true };
  },
};
