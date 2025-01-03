<script>
  import "./styles.css";
  let { children } = $props();
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
  </div>
</nav>

<div class="container">
  {@render children()}
</div>
