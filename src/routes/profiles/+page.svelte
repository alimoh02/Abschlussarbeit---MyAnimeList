<script>
  import ProfileCard from "$lib/components/ProfileCard.svelte"; // Deine Komponente für die Darstellung eines Profils
  let { data } = $props();
</script>

<p><i>MyAnimeList.com user Profiles (basierend auf deinem Datensatz).</i></p>

<div>
  <a href="/profiles/create" class="btn btn-primary">Add New Profile</a>
</div>

<div class="profile-grid">
  {#each data.profiles as profile}
      <ProfileCard {profile} />
  {/each}
</div>

<style>
  .profile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 3-4 Profile nebeneinander bei Platz */
      gap: 1.5rem; /* Abstand zwischen den Profilkarten */
      margin-top: 2rem;
  }
</style>
