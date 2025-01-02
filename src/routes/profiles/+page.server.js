import db from "$lib/db.js";

export async function load() {
    return {
        profiles: await db.getProfiles(),
    };
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        await db.deleteProfile(data.get("id"));
        return { success: true };
    },
};
