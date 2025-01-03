<script>
    export let manga;
</script>

<div class="manga-card">
    <img class="manga-img" src={manga.main_picture || "/default-image.png"} alt="{manga.title}" />
    <div class="details">
        <h5 class="title">{manga.title}</h5>
        <p class="info">Genres: {Array.isArray(manga.genres) ? manga.genres.join(", ") : "Not specified"}</p>
        <p class="info">Score: {manga.score || "N/A"}</p>
        <p class="info">Status: {manga.status || "Unknown"}</p>
    </div>
</div>

<style>
    .manga-card {
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

    .manga-card:hover {
        transform: scale(1.05);
    }

    .manga-img {
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

    .info {
        font-size: 0.9em;
        margin: 0.2em 0;
    }
</style>
