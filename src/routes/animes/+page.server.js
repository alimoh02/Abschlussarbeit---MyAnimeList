import db from "$lib/db.js";

export async function load({ url }) {
  const sortField = url.searchParams.get("sortField") || "title"; // Standardmäßig nach Titel sortieren
  const sortOrder = url.searchParams.get("sortOrder") === "desc" ? -1 : 1; // Standardmäßig aufsteigend sortieren

  const animes = await db.getAnimes(100);
  animes.sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1 * sortOrder;
    if (a[sortField] > b[sortField]) return 1 * sortOrder;
    return 0;
  });

  return {
    animes,
    sortField,
    sortOrder,
  };
}
