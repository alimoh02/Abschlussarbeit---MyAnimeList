import db from "$lib/db.js";

export async function load() {
    try {
        const reviews = await db.getReviews(50); // Limitiere auf 50 Reviews
        return { reviews };
    } catch (error) {
        console.error("Fehler beim Laden der Reviews:", error.message);
        return { reviews: [] };
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