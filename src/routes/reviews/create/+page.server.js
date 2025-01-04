import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let review = {
            profile: data.get("profile"),
            anime: data.get("anime"), // Speichere den Anime-Namen direkt
            score: parseInt(data.get("score")),
            text: data.get("text"),
        };
        await db.createReview(review); // Übergebe das Review ohne Validierung
        return { success: true };
    },
};
