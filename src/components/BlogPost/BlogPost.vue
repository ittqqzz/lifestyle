<template>
  <div>
    <section class="ae-container-fluid ae-container-fluid--full">
      <header       
      :style="{ 'background-image': 'url(' + '../../static/img/' + blogPostDetail.img + ')'}"
      class="rk-portfolio-cover">
        <div class="item-inside__meta">
          <h1 class="ae-u-bolder rk-portfolio-title">{{blogPostDetail.title}}</h1>
          <p class="ae-theta rk-portfolio-category">
            by
            <span class="ae-u-bolder">{{blogPostDetail.author}}</span>
          </p>
        </div>
      </header>
      <div class="ae-container-fluid ae-container-fluid--inner rk-portfolio--inner">
        <div class="ae-grid ae-grid--collapse au-xs-ptp-1">
          <div class="ae-grid__item" v-html="blogPostDetail.content"></div>
        </div>
      </div>
    </section>
    <section class="ae-container-fluid au-pt-4 au-pb-4">
      <div class="group-buttons au-mt-2">
        <router-link :to="'prepost/' + blogPostDetail.id" class="arrow-button arrow-button--reverse">
          Prev Post
          <div class="arrow-cont arrow-cont-rev">
            <svg-icon name="arrow"></svg-icon>
          </div>
        </router-link>
        <router-link :to="'nextpost/' + blogPostDetail.id" class="arrow-button">
          Next Post
          <span class="arrow-cont">
            <svg-icon name="arrow"></svg-icon>
          </span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blogPostDetail: {
          id: 0,
          img: 'post-1.jpg',
          title: 'All elements of a Post',
          author: 'Pixeden',
          content: '<h1 style="color: red">博客正文内容</h1>',

        }
      }
    }
  };
</script>

<style>
</style>