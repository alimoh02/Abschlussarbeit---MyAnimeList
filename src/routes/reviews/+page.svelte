<script>
  import ReviewCard from "$lib/components/ReviewCard.svelte";
  let { data } = $props();
</script>

<p><i>Anime reviews von MyAnimeList.com</i></p>

<div class="review-grid">
  {#each data.reviews as review}
    <div class="review-wrapper">
      <ReviewCard {review}></ReviewCard>
    </div>
  {:else}
    <p>Keine Reviews verfügbar.</p>
  {/each}
</div>

<style>
  .review-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem; /* Horizontaler Abstand */
    margin-top: 2rem;
  }

  .review-wrapper {
    margin-bottom: 1.5rem; /* Vertikaler Abstand zwischen den Karten */
  }
</style>
