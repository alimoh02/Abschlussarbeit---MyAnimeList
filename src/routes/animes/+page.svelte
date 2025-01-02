<script>
  import AnimeCard from "$lib/components/AnimeCard.svelte";
  let { data } = $props();
</script>

<p><i>Daten und Bilder bereitgestellt durch MyAnimeList.com (basierend auf deinem Datensatz).</i></p>

<div class="anime-grid">
  {#each data.animes as anime}
      <AnimeCard {anime}></AnimeCard>
  {/each}
</div>

<style>
  .anime-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
  }
</style>
