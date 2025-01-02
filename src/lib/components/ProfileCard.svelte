<script>
    export let profile;
  </script>
  
  <div class="card profile-card">
  <div class="profile-image">
    <img src={profile.image || "/default-profile.png"} alt={profile.profile || "Profile Image"} />
  </div>
  <div class="profile-details">
    <a href={profile.link} target="_blank" class="btn btn-info btn-sm">View Profile</a>
    <h3>{profile.profile}</h3>
    <p>Gender: {profile.gender || "Not specified"}</p>
    <p>Birthday: {profile.birthday || "Not specified"}</p>
    <form method="POST" action="?/delete" class="mt-2">
      <input type="hidden" name="id" value={profile._id}>
      <button class="btn btn-danger btn-sm">Delete Profile</button>
    </form>
  </div>
  </div>
  
  <style>
  .profile-card {
    background-color: #2e2e2e;
    color: white;
    border: 1px solid #444;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
  }
  
  .profile-image img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  
  .btn-sm {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .profile-details p {
    margin: 0.5rem 0;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  </style>
  