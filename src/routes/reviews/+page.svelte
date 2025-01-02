<script>
    let { data } = $props();
  </script>
  
  <p><i>Manage reviews</i></p>
  
  <div class="review-grid">
    {#each data.reviews as review}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <ReviewCard {review}></ReviewCard>
        </div>
    {/each}
  </div>
  
  <style>
    .review-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }
  </style>
  