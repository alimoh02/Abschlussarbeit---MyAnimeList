<script>
    import AnimeCard from "$lib/components/AnimeCard.svelte"; // Deine Komponente für die Darstellung eines Animes
    let { data } = $props();
  </script>
  
  <p><i>Daten und Bilder bereitgestellt durch MyAnimeList</i></p>
  
  <div class="anime-grid">
    {#each data.animes as anime}
      <AnimeCard {anime}></AnimeCard>
    {/each}
  </div>
  
  <style>
    .anime-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 3 Karten nebeneinander bei Platz, sonst flexibel */
      gap: 1.5rem; /* Abstand zwischen den Karten */
      margin-top: 2rem;
    }
  </style>
  