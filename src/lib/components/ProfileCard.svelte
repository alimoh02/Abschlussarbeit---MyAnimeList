<script>
    export let profile; // Daten des Profils aus der API
  </script>
  
  <div class="profile-card">
    <div class="details">
      <div class="title">
        <a href={profile.link} target="_blank">{profile.profile}</a>
      </div>
      <div>
        Gender: {profile.gender}
      </div>
      <div>
        Geburtstag: {profile.birthday}
      </div>
      <div>
        Lieblings-Anime: {profile.favorites.join(", ")}
      </div>
    </div>
  </div>
  
  <style>
    .profile-card {
      border: 1px solid #555;
      height: 100%;
      background-color: #34495e;
      color: white;
      border-radius: 8px;
      overflow: hidden;
      padding: 1em;
    }
    .details {
      padding: 0.5em;
    }
    .title {
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: 0.5em;
    }
  </style>
  