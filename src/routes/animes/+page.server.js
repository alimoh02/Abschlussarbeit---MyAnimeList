import db from "$lib/db.js";

export async function load() {
  return {
    animes: await db.getAnimes(150), // Limitiert auf 150 Animes
  };
}
