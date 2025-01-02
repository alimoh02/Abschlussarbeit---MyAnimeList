<script>
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  let { data } = $props();
</script>

<p><i>MyAnimeList.com user Profiles (basierend auf deinem Datensatz).</i></p>

<div class="profile-grid">
  <a href="/profiles/create" class="btn btn-primary">Add New Profile</a>
</div>

<div class="profile-grid">
  {#each data.profiles as profile}
      <ProfileCard {profile}></ProfileCard>
  {/each}
</div>

<style>
  .profile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
  }
</style>
