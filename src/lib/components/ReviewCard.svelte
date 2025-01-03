<script>
    export let review;
  </script>
  
  <div class="review-card">
    <div class="details">
      <div class="title">
        <a href={review?.link || "#"} target="_blank">Review von {review?.profile || "Unbekannt"}</a>
      </div>
      <div>Anime UID: {review?.anime_uid || "N/A"}</div>
      <div>Bewertung: {review?.score || "N/A"}</div>
      <div>Text: {review?.text || "N/A"}</div>
    </div>
  </div>
  
  <style>
    .review-card {
      border: 1px solid #555;
      background-color: #1abc9c;
      color: white;
      border-radius: 8px;
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
  