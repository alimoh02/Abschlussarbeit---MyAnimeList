import db from "$lib/db.js";

export async function load() {
  try {
    const reviews = await db.getReviews(100);
    return {
      reviews,
    };
  } catch (error) {
    console.error("Fehler beim Laden der Reviews:", error.message);
    return { reviews: [] }; // Gibt eine leere Liste zurück, falls ein Fehler auftritt
  }
}

export const actions = {
  delete: async ({ request }) => {
    try {
      const data = await request.formData();
      await db.deleteReview(data.get("id"));
      return { success: true };
    } catch (error) {
      console.error("Fehler beim Löschen des Reviews:", error.message);
      return { success: false };
    }
  },
};
