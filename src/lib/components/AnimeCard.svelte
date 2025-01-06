<script>
    export let anime;
  </script>
  
  <div class="anime-card">
    <img class="anime-img" src={anime.img_url} alt="{anime.title}" />
    <div class="details">
        <h5 class="title">
            <a href={"/reviews?anime_uid=" + anime.uid}>{anime.title}</a>
        </h5>
        <p class="info">Genre: {anime.genre}</p>
        <p class="info">Episoden: {anime.episodes}</p>
        <p class="info">Score: {anime.score}</p>
    </div>
  </div>
  
  <style>
    .anime-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #555;
        border-radius: 8px;
        background-color: #2c3e50;
        color: white;
        overflow: hidden;
        transition: transform 0.3s ease;
        height: 100%;
    }
  
    .anime-card:hover {
        transform: scale(1.05);
    }
  
    .anime-img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
  
    .details {
        padding: 1em;
    }
  
    .title {
        font-weight: bold;
        margin-bottom: 0.5em;
    }
  
    .title a {
        color: white;
        text-decoration: none;
    }
  
    .title a:hover {
        color: #1abc9c;
    }
  
    .info {
        font-size: 0.9em;
        margin: 0.2em 0;
    }
  </style>