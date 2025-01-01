import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let profile = {
      profile: data.get("profile"),
      gender: data.get("gender"),
      birthday: data.get("birthday"),
      favorites: data.get("favorites"),
    };
    await db.createProfile(profile);
    return { success: true };
  },
};
