<script>
    let { form } = $props();
  </script>
  
  <a href="/profiles" class="back-link">Zurück</a>
  <h1>Neues Profil hinzufügen</h1>
  
  <form method="POST" action="?/create">
    <div class="form-group">
      <label for="profile" class="form-label">Name des Profils</label>
      <input id="profile" name="profile" class="form-control" type="text" required />
    </div>
  
    <div class="form-group">
      <label for="gender" class="form-label">Geschlecht</label>
      <input id="gender" name="gender" class="form-control" type="text" required />
    </div>
  
    <div class="form-group">
      <label for="birthday" class="form-label">Geburtsdatum</label>
      <input id="birthday" name="birthday" class="form-control" type="date" />
    </div>
  
    <button type="submit" class="btn btn-success">Profil hinzufügen</button>
  </form>
  
  {#if form?.success}
    <p class="success-message">Profil erfolgreich hinzugefügt!</p>
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
  
    .success-message {
      color: #1abc9c;
      font-weight: bold;
      margin-top: 1rem;
    }
  </style>
  