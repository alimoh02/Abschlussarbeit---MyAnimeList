<script>
    let { data } = $props();
  </script>
  
  <p><i>Manage user profiles</i></p>
  
  <div>
    <a href="/profiles/create" class="btn btn-primary">Add New Profile</a>
  </div>
  
  <div class="row mt-3">
    {#each data.profiles as profile}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{profile.profile}</h5>
            <p>Gender: {profile.gender}</p>
            <p>Birthday: {profile.birthday}</p>
            <a href={profile.link} target="_blank" class="btn btn-info">View Profile</a>
            <form method="POST" action="?/delete" class="mt-2">
              <input type="hidden" name="id" value={profile._id}>
              <button class="btn btn-danger">Delete Profile</button>
            </form>
          </div>
        </div>
      </div>
    {/each}
  </div>
  