<script>
  let { form } = $props();
  </script>
  
  <a href="/profiles" class="back-link">Back</a>
  <h1>Add a New Profile</h1>
  
  <form method="POST" action="?/create">
  <div class="form-group">
  <label for="profile" class="form-label">Profile Name</label>
  <input id="profile" name="profile" class="form-control" type="text" />
  </div>
  
  <div class="form-group">
  <label for="gender" class="form-label">Gender</label>
  <input id="gender" name="gender" class="form-control" type="text" />
  </div>
  
  <div class="form-group">
  <label for="birthday" class="form-label">Birthday</label>
  <input id="birthday" name="birthday" class="form-control" type="date" />
  </div>
  
  <div class="form-group">
  <label for="favorites" class="form-label">Favorite Anime</label>
  <input id="favorites" name="favorites" class="form-control" type="text" placeholder="Comma-separated list" />
  </div>
  
  <button type="submit" class="btn btn-success">Add Profile</button>
  </form>
  
  {#if form?.success}
  <p>Profile successfully created!</p>
  {/if}
  
  <style>
  .back-link {
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;
  }
  
  .back-link:hover {
  text-decoration: underline;
  }
  
  h1 {
  color: #c8ffc8; /* Optional: Helle grüne Schrift für Überschriften */
  }
  
  .form-group {
  margin-bottom: 1.5rem; /* Abstand zwischen den Feldern */
  }
  
  form {
  margin-top: 2rem; /* Abstand zwischen der Überschrift und dem Formular */
  }
  </style>
  