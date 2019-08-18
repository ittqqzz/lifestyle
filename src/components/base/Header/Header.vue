<template>
  <header class="ae-container-fluid ae-container-fluid--full rk-header">
    <input type="checkbox" id="mobile-menu" class="rk-mobile-menu" />
    <label for="mobile-menu">
      <!-- <svg>
          <use xlink:href="assets/svg/symbols.svg#bar"></use>
        </svg>
        <svg>
          <use xlink:href="assets/svg/symbols.svg#bar"></use>
        </svg>
        <svg>
          <use xlink:href="assets/svg/symbols.svg#bar"></use>
      </svg>-->
      <svg-icon name="bar"></svg-icon>
      <svg-icon name="bar"></svg-icon>
      <svg-icon name="bar"></svg-icon>
    </label>
    <div class="ae-container-fluid rk-topbar">
      <h1 class="rk-logo">
        <a href="index.html">
          urku portfolio
          <sup>tm</sup>
        </a>
      </h1>
      <nav class="rk-navigation">
        <ul class="rk-menu">
          <li class="rk-menu__item">
            <a href="index.html" class="rk-menu__link">Home</a>
          </li>
          <li class="rk-menu__item">
            <a href="portfolio.html" class="rk-menu__link">Portfolio</a>
            <nav class="rk-menu__sub">
              <ul class="rk-container">
                <li class="rk-menu__item">
                  <a href="portfolio.html" class="rk-menu__link">Flex</a>
                </li>
                <li class="rk-menu__item">
                  <a href="portfolio-alt.html" class="rk-menu__link">Switch</a>
                </li>
                <li class="rk-menu__item">
                  <a href="portfolio-raw.html" class="rk-menu__link">Static</a>
                </li>
                <li class="rk-menu__item">
                  <a href="portfolio-masonry.html" class="rk-menu__link">Masonry</a>
                </li>
              </ul>
            </nav>
          </li>
          <li class="rk-menu__item">
            <!-- <a href="blog.html" class="rk-menu__link">Blog</a> -->
            <router-link to="/blog">Blog</router-link>
          </li>
          <li class="rk-menu__item">
            <a href="#0" class="rk-menu__link">Pages</a>
            <nav class="rk-menu__sub">
              <ul class="rk-container">
                <li class="rk-menu__item">
                  <a href="about.html" class="rk-menu__link">About</a>
                </li>
                <li class="rk-menu__item">
                  <a href="documentation.html" class="rk-menu__link">Documentation</a>
                </li>
                <li class="rk-menu__item">
                  <a href="design-styles.html" class="rk-menu__link">Design Styles</a>
                </li>
              </ul>
            </nav>
          </li>
          <li class="rk-menu__item">
            <a href="contact.html" class="rk-menu__link">Contact Us</a>
          </li>
        </ul>
        <form class="rk-search">
          <input type="text" placeholder="Search" id="urku-search" class="rk-search-field" />
          <label for="urku-search">
            <!-- <svg>
                <use xlink:href="assets/svg/symbols.svg#icon-search"></use>
            </svg>-->
            <svg-icon name="search"></svg-icon>
          </label>
        </form>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>