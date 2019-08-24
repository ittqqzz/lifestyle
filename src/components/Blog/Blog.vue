<template>
  <Section>
    <svg-icon slot="layout-icon" name="icon-view-full"></svg-icon>

    <section slot="service" class="ae-container-fluid ae-container-fluid--inner rk-blog">
      <div class="rk-blog__items">
        <div class="rk-blog__item" v-for="(item, index) in blogPosts" :key="index">
          <div :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}"
            class="post-img rk-landscape-alt rk-tosquare">
            <div class="item-meta">
              <p>
                <router-link :to="item.postLink" class="arrow-button">
                  Read More
                  <span class="arrow-cont">
                    <svg-icon name="arrow"></svg-icon>
                  </span>
                </router-link>
              </p>
            </div>
          </div>
          <div class="blog-info">
            <h2 class="blog-info__title">
              <router-link :to="item.postLink">{{item.title}}</router-link>
            </h2>
            <h5 class="blog-info__author">
              By
              <router-link :to="item.authorSearchLink" class="ae-u-bolder">{{item.author}}</router-link>
            </h5>
            <p class="blog-info__excerpt">
              <!-- todo 是否使用 v-html？ -->
              {{item.info}}
            </p>
          </div>
          <div class="blog-meta">
            <router-link :to="item.postLink" class="ae-u-bolder blog-meta__comments">{{item.commentCount}} Comments
            </router-link>
            <span class="ae-kappa ae-u-bold blog-meta__date">{{item.postDate}}</span>
            <router-link :to="item.postLink" class="arrow-button blog-meta__read-more">
              Read More
              <span class="arrow-cont">
                <svg>
                  <use xlink:href="assets/img/symbols.svg#arrow" />
                </svg>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </Section>
</template>

<script>
  import Section from "../base/Section/Section";
  export default {
    data() {
      return {
        blogPosts: [{
          img: 'post-1.jpg',
          postLink: '/blog-post',
          title: 'All elements of a Post',
          author: 'Pixeden',
          authorSearchLink: '#',
          info: '详细信息简写',
          commentCount: 3,
          postDate: 'August, 12 2015'
        }]
      }
    },
    components: {
      Section
    }
  };
</script>

<style>
</style>