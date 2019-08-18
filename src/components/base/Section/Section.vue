<template>
  <section class="ae-container-fluid rk-main">
    <input type="radio" name="layout-ctrl" checked id="layout-base" class="layout-ctrl-input" />
    <div class="ae-container-fluid rk-layout-ctrl-cont">
      <label for="layout-base" class="rk-layout-ctrl">
        <!-- <svg>
            <use xlink:href="assets/img/symbols.svg#icon-view-default"></use>
        </svg>-->
        <slot name="layout-icon"></slot>
      </label>
    </div>
    <input type="radio" name="layout-ctrl" id="layout-grid" class="layout-ctrl-input" />
    <div class="ae-container-fluid rk-layout-ctrl-cont">
      <label for="layout-grid" class="rk-layout-ctrl">
        <!-- <svg>
            <use xlink:href="assets/img/symbols.svg#icon-view-alt"></use>
        </svg>-->
        <svg-icon name="icon-view-alt"></svg-icon>
      </label>
    </div>
    <div class="rk-layout-ctrl-mobile ">
      <svg viewBox="0 0 9 9" class="layout-mob-1">
        <rect width="100%" height="100%" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 9 9" class="layout-mob-2">
        <rect width="100%" height="100%" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 9 9" class="layout-mob-3">
        <rect width="100%" height="100%" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 9 9" class="layout-mob-4">
        <rect width="100%" height="100%" fill="currentColor" />
      </svg>
    </div>
   
    <slot name="service"></slot>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>