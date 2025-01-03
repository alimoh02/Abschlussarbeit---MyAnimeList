<script>
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  let { data } = $props();
</script>

<p><i>User profiles von MyAnimeList.com</i></p>

<div class="actions">
  <a href="/profiles/create" class="btn btn-dark">Neues Profil hinzufügen</a>
</div>

<div class="profile-grid">
  {#each data.profiles as profile}
    <div class="profile-wrapper">
      <ProfileCard {profile} />
    </div>
  {:else}
    <p>Keine Profile verfügbar.</p>
  {/each}
</div>

<style>
  .actions {
    margin-bottom: 1.5rem;
  }

  .btn {
    display: inline-block;
    background-color: #34495e; /* Dunkleres Blau/Grau */
    color: white;
    padding: 0.8rem 1.2rem;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #2c3e50; /* Noch dunkler bei Hover */
  }

  .profile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem; /* Horizontaler Abstand */
    margin-top: 2rem;
  }

  .profile-wrapper {
    margin-bottom: 1.5rem; /* Vertikaler Abstand zwischen den Profilkarten */
  }
</style>
