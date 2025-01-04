<script>
  import MangaCard from "$lib/components/MangaCard.svelte";
  let { data } = $props();

  const handleSortChange = (event) => {
    const { name, value } = event.target;
    const url = new URL(window.location.href);
    url.searchParams.set(name, value);
    window.location.href = url.toString();
  };
</script>

<p><i>Mangas von MyAnimeList.com</i></p>

<div class="page-container">
  <!-- Manga-Grid -->
  <div class="manga-grid">
    {#each data.mangas as manga}
      <MangaCard {manga}></MangaCard>
    {/each}
  </div>

  <!-- Sortieroptionen -->
  <div class="sort-options">
    <h4>Sortieren</h4>
    <select name="sortField" onchange={handleSortChange}>
      <option value="title" selected={data.sortField === "title"}>Alphabetisch</option>
      <option value="score" selected={data.sortField === "score"}>Score</option>
    </select>

    <select name="sortOrder" onchange={handleSortChange}>
      <option value="asc" selected={data.sortOrder === "asc"}>Aufsteigend</option>
      <option value="desc" selected={data.sortOrder === "desc"}>Absteigend</option>
    </select>
  </div>
</div>

<style>
  /* Layout-Anpassungen */
  .page-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem; /* Abstand zwischen Manga-Grid und Sortierfunktion */
  }

  .manga-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 Karten nebeneinander */
    gap: 1.5rem;
    width: 75%; /* 75% für das Grid */
  }

  .sort-options {
    background-color: #2c3e50;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 150px; /* Kleinere Breite */
    font-size: 0.9rem; /* Kleinere Schriftgröße */
  }

  .sort-options h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem; /* Kleinere Überschrift */
  }

  .sort-options select {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    border: 1px solid #555;
    border-radius: 5px;
    background-color: #34495e;
    color: white;
    font-size: 0.85rem; /* Kleinere Auswahlfelder */
  }

  .sort-options select:focus {
    outline: none;
    border-color: #1abc9c;
    box-shadow: 0 0 4px #1abc9c;
  }
</style>
