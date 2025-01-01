<script>
    let { form } = $props();
  </script>
  
  <a href="/reviews">Back</a>
  <h1>Add a New Review</h1>
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="" class="form-label">Profile Name</label>
      <input name="profile" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Anime UID</label>
      <input name="anime_uid" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Score</label>
      <input name="score" class="form-control" type="number" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Review Text</label>
      <textarea name="text" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Add Review</button>
  </form>
  
  {#if form?.success}
    <p>Review successfully created!</p>
  {/if}
  