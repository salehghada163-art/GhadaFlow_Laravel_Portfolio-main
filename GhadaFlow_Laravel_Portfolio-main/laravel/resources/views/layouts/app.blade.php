<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="@yield('description', 'GhadaFlow — Ghada Saleh Al-Towajri, Web Developer.')">
<title>@yield('title', 'GhadaFlow | Web Developer')</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<link rel="stylesheet" href="{{ asset('css/responsive.css') }}">
<link rel="stylesheet" href="{{ asset('css/theme.css') }}">
<script>
  /* Apply saved theme before first paint to avoid a flash of the wrong theme. */
  (function () {
    try {
      var theme = localStorage.getItem('ghadaflow-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
</script>
</head>
<body>
<header class="site-header">
<div class="container navbar">
<a class="brand" href="{{ route('home') }}"><span class="brand-mark">G</span><span data-i18n="brandName">GhadaFlow</span></a>
<button class="mobile-menu-button" id="mobileMenuButton" aria-expanded="false" aria-controls="mainNavigation" aria-label="Open navigation"><span></span><span></span><span></span></button>
<nav class="nav-menu" id="mainNavigation">
<div class="nav-links">
<a class="nav-link @yield('nav_home', '')" data-nav-link data-section="home" href="{{ route('home') }}#home" data-i18n="nav.home">Home</a>
<a class="nav-link" data-nav-link data-section="about" href="{{ route('home') }}#about" data-i18n="nav.about">About</a>
<a class="nav-link" data-nav-link data-section="experience" href="{{ route('home') }}#experience" data-i18n="nav.experience">Experience</a>
<a class="nav-link" data-nav-link data-section="projects" href="{{ route('home') }}#projects" data-i18n="nav.projects">Projects</a>
<a class="nav-link @yield('nav_certificates', '')" data-nav-link href="{{ route('certificates') }}" data-i18n="nav.certificates">Certificates</a>
<a class="nav-link" data-nav-link data-section="skills" href="{{ route('home') }}#skills" data-i18n="nav.skills">Skills</a>
</div>
<div class="nav-actions">
<!-- Email: opens the Outlook app configured for mailto on Windows -->
<a class="nav-contact-link" href="mailto:ghadacareer75@outlook.com" data-i18n="nav.email">Email</a>
<a class="nav-contact-link" href="https://www.linkedin.com/in/ghada-saleh-altuwijri-9971a83a8/" target="_blank" rel="noopener noreferrer" data-i18n="nav.linkedin">LinkedIn</a>
<a class="nav-contact-link" href="https://github.com/ghadacareer65-ui" target="_blank" rel="noopener noreferrer" data-i18n="nav.github">GitHub</a>
<button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"><span id="themeIcon">&#9789;</span></button>
<button class="language-toggle" id="languageToggle" aria-label="Change language"><span class="language-current" id="languageCurrent">AR</span></button>
</div>
</nav>
</div>
</header>

<main>
@yield('content')
</main>

<footer class="site-footer">
<div class="container footer-content">
<div class="footer-brand"><a class="brand" href="{{ route('home') }}"><span class="brand-mark">G</span><span data-i18n="brandName">GhadaFlow</span></a><p data-i18n="footer.name">Ghada Saleh Al-Towajri</p><span data-i18n="footer.title">Web Developer</span></div>
<div class="footer-links">
<a href="https://www.linkedin.com/in/ghada-saleh-altuwijri-9971a83a8/" target="_blank" rel="noopener noreferrer" data-i18n="nav.linkedin">LinkedIn</a>
<a href="https://github.com/ghadacareer65-ui" target="_blank" rel="noopener noreferrer" data-i18n="nav.github">GitHub</a>
</div>
</div>
<div class="footer-bottom"><div class="container"><span data-i18n="footer.copyright">© 2026 GhadaFlow. All rights reserved.</span></div></div>
</footer>
<script src="{{ asset('js/data.js') }}"></script>
<script src="{{ asset('js/translations.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
@stack('scripts')
</body>
</html>
