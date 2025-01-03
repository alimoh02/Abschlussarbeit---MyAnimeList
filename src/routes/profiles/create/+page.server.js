import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();
      let profile = {
        profile: data.get("profile"),
        gender: data.get("gender"),
        birthday: data.get("birthday"),
      };
      await db.createProfile(profile);
      return { success: true };
    } catch (error) {
      console.error("Fehler beim Erstellen des Profils:", error.message);
      return { success: false };
    }
  },
};
