<script>
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    import MangaCard from "$lib/components/MangaCard.svelte";
    let { data } = $props();
  </script>
  
  <h1>Suchergebnisse für "{data.query}"</h1>
  
  {#if data.animes.length === 0 && data.mangas.length === 0}
    <p>Keine Ergebnisse gefunden.</p>
  {:else}
    <h2>Animes</h2>
    <div class="result-grid">
      {#each data.animes as anime}
        <AnimeCard {anime} />
      {/each}
    </div>
  
    <h2>Mangas</h2>
    <div class="result-grid">
      {#each data.mangas as manga}
        <MangaCard {manga} />
      {/each}
    </div>
  {/if}
  
  <style>
    h1 {
      margin-bottom: 1.5rem;
      color: #8afaa8;
    }
  
    h2 {
      margin-top: 2rem;
      color: #e0ffe0;
    }
  
    .result-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }
  </style>