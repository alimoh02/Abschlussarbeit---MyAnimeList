import db from "$lib/db.js";

export async function load({ url }) {
  const query = url.searchParams.get("q") || ""; // Suchanfrage auslesen
  const limit = 200; // Beibehaltung der Limitierung

  if (!query.trim()) {
    return { animes: [], mangas: [], query };
  }

  // Suche in Animes und Mangas
  const animes = (await db.getAnimes(limit)).filter((anime) =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );

  const mangas = (await db.getMangas(limit)).filter((manga) =>
    manga.title.toLowerCase().includes(query.toLowerCase())
  );

  return { animes, mangas, query };
}