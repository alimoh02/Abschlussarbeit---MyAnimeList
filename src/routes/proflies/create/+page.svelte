<script>
    let { form } = $props();
  </script>
  
  <a href="/profiles">Back</a>
  <h1>Add a New Profile</h1>
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="" class="form-label">Profile Name</label>
      <input name="profile" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Gender</label>
      <input name="gender" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Birthday</label>
      <input name="birthday" class="form-control" type="date" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Favorites Anime</label>
      <input name="favorites" class="form-control" type="text" />
    </div>
    <button type="submit" class="btn btn-primary">Add Profile</button>
  </form>
  
  {#if form?.success}
    <p>Profile successfully created!</p>
  {/if}
  