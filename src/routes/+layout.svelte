<script>
  import "./styles.css";
  let { children } = $props();

  // Deklariere `searchQuery` als lokale Variable
  let searchQuery = ""; // Eingabe des Benutzers
</script>

<nav class="navbar">
  <div class="navbar-container">
    <a class="navbar-brand" href="/">MyAnimeList</a>
    <div class="navbar-links">
      <a href="/animes" class="nav-link">Animes</a>
      <a href="/mangas" class="nav-link">Mangas</a>
      <a href="/profiles" class="nav-link">Profiles</a>
      <a href="/reviews" class="nav-link">Reviews</a>
    </div>
    <form method="GET" action="/search" class="search-form">
      <input
        type="text"
        name="q"
        placeholder="Suche..."
        bind:value={searchQuery}
        class="search-input"
      />
      <button type="submit" class="search-button">🔍</button>
    </form>
  </div>
</nav>

<div class="container">
  {@render children()}
</div>

<style>
  .search-form {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 0.5rem;
  }

  .search-input {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 200px;
  }

  .search-button {
    background-color: #34495e;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }

  .search-button:hover {
    background-color: #2c3e50;
  }
</style>
