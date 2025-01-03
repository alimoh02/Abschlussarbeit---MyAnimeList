import db from "$lib/db.js";

export async function load() {
  return {
    mangas: await db.getMangas(200), // Limitiert auf 200 Mangas
  };
}
