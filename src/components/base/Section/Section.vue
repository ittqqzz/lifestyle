<template>
  <section class="ae-container-fluid rk-main">
    <!-- 以下是两个栅格布局切换按钮的构造 -->
    <input type="radio" name="layout-ctrl" checked id="layout-base" class="layout-ctrl-input" />
    <div class="ae-container-fluid rk-layout-ctrl-cont">
      <label for="layout-base" class="rk-layout-ctrl">
        <!-- 第一个布局按钮需要根据不同的页面自由变化，使用 slot -->
        <slot name="layout-icon"></slot>
      </label>
    </div>
    <input type="radio" name="layout-ctrl" id="layout-grid" class="layout-ctrl-input" />
    <div class="ae-container-fluid rk-layout-ctrl-cont">
      <label for="layout-grid" class="rk-layout-ctrl">
        <svg-icon name="icon-view-alt"></svg-icon>
      </label>
    </div>
    <!-- iPad 端布局更改按钮 -->
    <div class="rk-layout-ctrl-mobile">
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
    <!-- 具体业务代码插槽 -->
    <slot name="service"></slot>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>