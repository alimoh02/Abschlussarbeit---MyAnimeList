<script>
  export let profile;
</script>

<div class="profile-card">
  <img
    class="profile-img"
    src={profile.image || "/default-profile.png"}
    alt={profile.profile || "Profile Image"}
  />
  <div class="details">
    <h5 class="title">
      <a href={profile.link || "#"} target="_blank" rel="noopener noreferrer" style="color: white;">
        {profile.profile || "Unbekannt"}
      </a>
    </h5>
    <p class="info">Geschlecht: {profile.gender || "Nicht angegeben"}</p>
    <p class="info">Geburtsdatum: {profile.birthday || "Nicht angegeben"}</p>
    <form method="POST" action="?/delete" class="delete-form">
      <input type="hidden" name="id" value={profile._id} />
      <button class="btn btn-danger btn-sm">Profil löschen</button>
    </form>
  </div>
</div>

<style>
  .profile-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #555;
    border-radius: 8px;
    background-color: #2c3e50;
    color: white;
    overflow: hidden;
    transition: transform 0.3s ease;
    height: 100%;
    padding: 1em;
  }

  .profile-card:hover {
    transform: scale(1.05);
  }

  .profile-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  .details {
    padding: 0.5em;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0.5em;
    font-size: 1.2em;
  }

  .info {
    font-size: 0.9em;
    margin: 0.2em 0;
  }

  .delete-form {
    margin-top: 1em;
  }

  .btn-sm {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
</style>