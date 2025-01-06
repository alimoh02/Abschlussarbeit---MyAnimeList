export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const allowedGenders = ["Male", "Female", "Divers"]; // Erlaubte Werte
    const gender = data.get("gender");

    if (!allowedGenders.includes(gender)) {
      return { success: false, error: "Ungültiges Geschlecht ausgewählt." };
    }

    let profile = {
      profile: data.get("profile"),
      gender: gender,
      birthday: data.get("birthday"),
    };

    await db.createProfile(profile);
    return { success: true };
  },
};