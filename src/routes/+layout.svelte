<script>
    import "./styles.css"; // Importiere das CSS-Stylesheet für das Layout
    let { children } = $props();
  </script>
  
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Titel auf der linken Seite -->
      <a class="navbar-brand" href="/">MyAnimeList</a>
  
      <!-- Navigation auf der rechten Seite -->
      <div class="navbar-links">
        <a href="/animes" class="nav-link">Animes</a>
        <a href="/profiles" class="nav-link">Profiles</a>
        <a href="/reviews" class="nav-link">Reviews</a>
      </div>
    </div>
  </nav>
  
  <div class="container">
    {@render children()} <!-- Der Inhalt der Unterseiten wird hier gerendert -->
  </div>
  