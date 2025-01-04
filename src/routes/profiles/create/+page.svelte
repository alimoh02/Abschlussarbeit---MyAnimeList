<script>
  let { form } = $props();
</script>

<a href="/profiles" class="back-link">Zurück</a>
<h1>Neues Profil hinzufügen</h1>

<form method="POST" action="?/create" class="form-container">
  <div class="form-group">
    <label for="profile" class="form-label">Name des Profils</label>
    <input id="profile" name="profile" class="form-input" type="text" placeholder="Profilname eingeben" required />
  </div>

  <div class="form-group">
    <label for="gender" class="form-label">Geschlecht</label>
    <select id="gender" name="gender" class="form-input select-input" required>
      <option value="" disabled selected>Wähle Geschlecht...</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Divers">Divers</option>
    </select>
  </div>

  <div class="form-group">
    <label for="birthday" class="form-label">Geburtsdatum</label>
    <input id="birthday" name="birthday" class="form-input" type="date" />
  </div>

  <button type="submit" class="btn btn-success">Profil hinzufügen</button>
</form>

{#if form?.success}
  <p class="success-message">Profil erfolgreich hinzugefügt!</p>
{/if}

<style>
  /* Link "Zurück" */
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

  /* Überschrift */
  h1 {
    color: #c8ffc8;
    text-align: center;
    margin-bottom: 2rem;
  }

  /* Formular-Container */
  .form-container {
    background-color: #2c3e50;
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Formular-Gruppe */
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

  /* Dropdown-Menü */
  .select-input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='white' d='M10 12l5-5H5l5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem;
  }

  /* Button */
  .btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-success {
    background-color: #1abc9c;
    color: white;
  }

  .btn-success:hover {
    background-color: #16a085;
  }

  /* Erfolgsnachricht */
  .success-message {
    color: #1abc9c;
    font-weight: bold;
    text-align: center;
    margin-top: 1.5rem;
  }
</style>
