<script>
    export let review;
  </script>
  
  <div class="review-card">
    <div class="details">
      <h5 class="title">
        <a href={review?.link || "#"} target="_blank">Review von {review?.profile || "Unbekannt"}</a>
      </h5>
      <p class="info">Anime: {review?.anime_name || "N/A"}</p>
      <p class="info">Bewertung: {review?.score || "N/A"}</p>
      <p class="info">Text: {review?.text || "N/A"}</p>
    </div>
  </div>
  
  <style>
    .review-card {
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
  
    .review-card:hover {
      transform: scale(1.05);
    }
  
    .details {
      padding: 0.5em;
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