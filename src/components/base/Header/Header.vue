<template>
  <header class="ae-container-fluid ae-container-fluid--full rk-header">
    <input type="checkbox" id="mobile-menu" class="rk-mobile-menu" />
    <label for="mobile-menu">
      <svg-icon name="bar"></svg-icon>
      <svg-icon name="bar"></svg-icon>
      <svg-icon name="bar"></svg-icon>
    </label>
    <div class="ae-container-fluid rk-topbar">
      <h1 class="rk-logo">
        <router-link to="/">{{logoText}}</router-link>
      </h1>
      <!-- TODO nav 里面添加coach类似的导航内容，日后有需求在加。目前不需要 -->
      <nav class="rk-navigation">
        <ul class="rk-menu">
          <li class="rk-menu__item" v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.path" class="rk-menu__link">{{item.text}}</router-link>
          </li>
        </ul>
        <!-- todo -->
        <form class="rk-search">
          <input type="text" placeholder="Search" id="urku-search" class="rk-search-field" />
          <label for="urku-search">
            <svg-icon name="search"></svg-icon>
          </label>
        </form>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logoText: "LifeStyle",
      navItems: [
        {
          path: "/",
          text: "Home"
        },
        {
          path: "/blog",
          text: "Blog"
        },
        {
          path: "/about",
          text: "About"
        }
      ]
    };
  }
};
</script>

<style>
</style>