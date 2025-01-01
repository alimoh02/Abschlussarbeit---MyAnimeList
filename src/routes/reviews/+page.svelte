<script>
    let { data } = $props();
  </script>
  
  <p><i>Manage reviews</i></p>
  
  <div>
    <a href="/reviews/create" class="btn btn-primary">Add New Review</a>
  </div>
  
  <div class="row mt-3">
    {#each data.reviews as review}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Review by {review.profile}</h5>
            <p>Score: {review.score}</p>
            <p>{review.text}</p>
            <a href={review.link} target="_blank" class="btn btn-info">View Full Review</a>
            <form method="POST" action="?/delete" class="mt-2">
              <input type="hidden" name="id" value={review._id}>
              <button class="btn btn-danger">Delete Review</button>
            </form>
          </div>
        </div>
      </div>
    {/each}
  </div>
  