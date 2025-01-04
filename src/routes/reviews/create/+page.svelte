<script>
  let { form } = $props();
</script>

<a href="/reviews" class="back-link">Zurück</a>
<h1>Neues Review hinzufügen</h1>

<form method="POST" action="?/create" class="form-container">
  <div class="form-group">
      <label for="profile" class="form-label">Profilname</label>
      <input id="profile" name="profile" class="form-input" type="text" placeholder="Profilname eingeben" required />
  </div>

  <div class="form-group">
      <label for="anime_uid" class="form-label">Anime UID</label>
      <input id="anime_uid" name="anime_uid" class="form-input" type="text" placeholder="Anime UID eingeben" required />
  </div>

  <div class="form-group">
      <label for="score" class="form-label">Bewertung (1-10)</label>
      <input id="score" name="score" class="form-input" type="number" min="1" max="10" placeholder="Bewertung eingeben" required />
  </div>

  <div class="form-group">
      <label for="text" class="form-label">Review-Text</label>
      <textarea id="text" name="text" class="form-input" placeholder="Review-Text schreiben" required></textarea>
  </div>

  <button type="submit" class="btn btn-success">Review hinzufügen</button>
</form>

{#if form?.success}
  <p class="success-message">Review erfolgreich hinzugefügt!</p>
{/if}

<style>
  .back-link {
      color: #8afaa8;
      font-weight: bold;
      text-decoration: none;
      margin-bottom: 1rem;
      display: inline-block;
  }

  .back-link:hover {
      text-decoration: underline;
  }

  h1 {
      color: #c8ffc8;
      text-align: center;
      margin-bottom: 2rem;
  }

  .form-container {
      background-color: #2c3e50;
      padding: 2rem;
      border-radius: 10px;
      max-width: 500px;
      margin: 0 auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .form-group {
      margin-bottom: 1.5rem;
  }

  .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #e0ffe0;
  }

  .form-input {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #34495e;
      border-radius: 5px;
      background-color: #1b1d1c;
      color: #e0ffe0;
      font-size: 1rem;
  }

  .form-input:focus {
      outline: none;
      border-color: #1abc9c;
      box-shadow: 0 0 4px #1abc9c;
  }

  .btn-success {
      background-color: #1abc9c;
      color: white;
      padding: 0.8rem;
      font-size: 1rem;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
  }

  .btn-success:hover {
      background-color: #16a085;
  }

  .success-message {
      color: #1abc9c;
      font-weight: bold;
      text-align: center;
      margin-top: 1.5rem;
  }
</style>
