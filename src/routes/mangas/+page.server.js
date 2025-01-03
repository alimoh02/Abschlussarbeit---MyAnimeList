import db from "$lib/db.js";

export async function load() {
  return {
    mangas: await db.getMangas(150), // Begrenze die Anzahl auf 150 Mangas
  };
}
