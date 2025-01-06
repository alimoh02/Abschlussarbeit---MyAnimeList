import db from "$lib/db.js";

export async function load({ url }) {
  const sortField = url.searchParams.get("sortField") || "title"; // Standard-Sortierfeld
  const sortOrder = url.searchParams.get("sortOrder") === "desc" ? -1 : 1; // Standard: Aufsteigend

  const mangas = await db.getMangas(100); // Limitiert auf 100 Mangas
  mangas.sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1 * sortOrder;
    if (a[sortField] > b[sortField]) return 1 * sortOrder;
    return 0;
  });

  return {
    mangas,
    sortField,
    sortOrder, // Übergebe die Sortierkriterien an das Frontend
  };
}