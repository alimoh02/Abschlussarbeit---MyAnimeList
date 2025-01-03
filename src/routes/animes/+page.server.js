import db from "$lib/db.js";

export async function load() {
  return {
    animes: await db.getAnimes(100), // Limitiert auf 100 Animes
  };
}
