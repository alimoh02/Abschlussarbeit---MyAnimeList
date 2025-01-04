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
    <label for="sortField">Sortierfeld</label>
    <select id="sortField" name="sortField" onchange={handleSortChange}>
      <option value="title" selected={data.sortField === "title"}>Alphabetisch</option>
      <option value="score" selected={data.sortField === "score"}>Score</option>
    </select>

    <label for="sortOrder">Reihenfolge</label>
    <select id="sortOrder" name="sortOrder" onchange={handleSortChange}>
      <option value="asc" selected={data.sortOrder === "asc"}>Aufsteigend</option>
      <option value="desc" selected={data.sortOrder === "desc"}>Absteigend</option>
    </select>
  </div>
</div>

<style>
  /* Haupt-Container */
  .page-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
  }

  /* Grid für Karten */
  .manga-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 75%;
  }

  /* Sortierbox */
  .sort-options {
    background-color: #34495e;
    color: white;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 200px;
    font-size: 0.9rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .sort-options:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .sort-options h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 1px solid #555;
    padding-bottom: 0.5rem;
  }

  .sort-options label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: bold;
    color: #8afaa8;
  }

  .sort-options select {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #555;
    border-radius: 6px;
    background-color: #2c3e50;
    color: white;
    font-size: 0.85rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .sort-options select:focus {
    outline: none;
    border-color: #1abc9c;
    box-shadow: 0 0 6px #1abc9c;
  }
</style>
