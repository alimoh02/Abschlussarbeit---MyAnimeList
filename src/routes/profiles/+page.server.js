import db from "$lib/db.js";

export async function load() {
  return {
    profiles: await db.getProfiles(200), // Limitiert auf 200 Profile
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteProfile(data.get("id"));
    return { success: true };
  },
};