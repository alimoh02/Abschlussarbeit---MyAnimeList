<script>
    import MangaCard from "$lib/components/MangaCard.svelte";
    let { data } = $props();
  </script>
  
  <p><i>Mangas von MyAnimeList.com</i></p>
  
  <div class="manga-grid">
    {#each data.mangas as manga}
      <MangaCard {manga}></MangaCard>
    {/each}
  </div>
  
  <style>
    .manga-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
  </style>
  