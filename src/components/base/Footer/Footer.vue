<template>
  <footer class="ae-container-fluid rk-footer">
    <div class="ae-grid ae-grid--collapse">
      <div class="ae-grid__item au-xs-ta-center">
        <p class="rk-footer__text rk-footer__copy">
          <span class="ae-u-bold">©</span>
          <span class="ae-u-bolder">{{footerText}}</span>&nbsp;All Rights Reserved.
        </p>
      </div>
      <!-- <div class="ae-grid__item item-lg-4 au-xs-ta-center">
        <a href="#0" class="rk-social-btn">
          <svg>
            <use xlink:href="assets/img/symbols.svg#icon-facebook" />
          </svg>
        </a>
        <a href="#0" class="rk-social-btn">
          <svg>
            <use xlink:href="assets/img/symbols.svg#icon-twitter" />
          </svg>
        </a>
        <a href="#0" class="rk-social-btn">
          <svg>
            <use xlink:href="assets/img/symbols.svg#icon-pinterest" />
          </svg>
        </a>
        <a href="#0" class="rk-social-btn">
          <svg>
            <use xlink:href="assets/img/symbols.svg#icon-tumblr" />
          </svg>
        </a>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText: "2019 LIFESTYLE"
    }
  }
};
</script>

<style scoped>
.rk-footer {
    margin-top: 4rem;
    margin-bottom: 1rem;
}
</style>