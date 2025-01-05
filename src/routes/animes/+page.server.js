import db from "$lib/db.js";

export async function load({ url }) {
  try {
    // Sortierparameter aus URL auslesen
    const sortField = url.searchParams.get("sortField") || "title"; // Standard: nach Titel sortieren
    const sortOrder = url.searchParams.get("sortOrder") === "desc" ? -1 : 1; // Standard: aufsteigend

    // Animes aus der Datenbank abrufen
    const animes = await db.getAnimes(200); // Limit auf 200 Animes

    // Sortierung durchführen
    animes.sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1 * sortOrder;
      if (a[sortField] > b[sortField]) return 1 * sortOrder;
      return 0;
    });

    // Erfolgreiches Laden der Daten
    return {
      animes,
      sortField,
      sortOrder,
    };
  } catch (error) {
    console.error("Fehler beim Laden der Animes:", error.message); // Fehlerprotokollierung
    throw error; // Fehler an SvelteKit weiterleiten
  }
}