<script>
  import ReviewCard from "$lib/components/ReviewCard.svelte";
  let { data } = $props();
</script>

<p><i>Anime Reviews von MyAnimeList.com</i></p>

<div class="actions">
  <a href="/reviews/create" class="btn btn-dark">Neues Review hinzufügen</a>
</div>

<div class="review-grid">
  {#each data.reviews as review}
      <div class="review-wrapper">
          <ReviewCard {review} />
          <form method="POST" action="?/delete" class="delete-form">
              <input type="hidden" name="id" value={review._id} />
              <button type="submit" class="btn btn-danger btn-sm">Review löschen</button>
          </form>
      </div>
  {:else}
      <p>Keine Reviews verfügbar.</p>
  {/each}
</div>

<style>
  .actions {
      margin-bottom: 1.5rem;
  }

  .btn {
      display: inline-block;
      background-color: #34495e;
      color: white;
      padding: 0.8rem 1.2rem;
      text-decoration: none;
      font-size: 1rem;
      border-radius: 5px;
      transition: background-color 0.3s ease;
  }

  .btn:hover {
      background-color: #2c3e50;
  }

  .review-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
  }

  .review-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
  }

  .delete-form {
      text-align: center;
      margin-top: 0.5rem;
  }

  .btn-danger {
      background-color: #e74c3c;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  }

  .btn-danger:hover {
      background-color: #c0392b;
  }
</style>
