<template>
  <div>
    <Section>
      <!-- 填充自定义的Svg -->
      <svg-icon slot="layout-icon" name="icon-view-default"></svg-icon>
      <!-- 填充主体内容 -->
      <section slot="service" class="ae-container-fluid ae-container-fluid--inner loading rk-portfolio">
        <div class="rk-portfolio__items">
          <a v-for="(item, index) in channels.slice(0,3)" :key="'item1-' + index" :ref="item.name" :href="item.href"
            :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}" :class="item.class"
            class="rk-item rk-item--flex">
            <div class="item-meta">
              <h2>{{item.desHead}}</h2>
              <p>{{item.desContent}}</p>
            </div>
          </a>
          <div class="rk-items-cont rk-size-6 rk-tosize-8">
            <a v-for="(item, index) in channels.slice(3,5)" :key="'item2-' + index" :ref="item.name" :href="item.href"
              :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}" :class="item.class"
              class="rk-item rk-item--flex">
              <div class="item-meta">
                <h2>{{item.desHead}}</h2>
                <p>{{item.desContent}}</p>
              </div>
            </a>
          </div>
          <a v-for="(item, index) in channels.slice(5,6)" :key="'item3-' + index" :ref="item.name" :href="item.href"
            :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}" :class="item.class"
            class="rk-item rk-item--flex">
            <div class="item-meta">
              <h2>{{item.desHead}}</h2>
              <p>{{item.desContent}}</p>
            </div>
          </a>
          <div class="rk-items-cont rk-size-4 rk-tosize-8">
            <a v-for="(item, index) in channels.slice(6,8)" :key="'item4-' + index" :ref="item.name" :href="item.href"
              :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}" :class="item.class"
              class="rk-item rk-item--flex">
              <div class="item-meta">
                <h2>{{item.desHead}}</h2>
                <p>{{item.desContent}}</p>
              </div>
            </a>
          </div>
          <a v-for="(item, index) in channels.slice(8, 10)" :key="'item5-' + index" :ref="item.name" :href="item.href"
            :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}" :class="item.class"
            class="rk-item rk-item--flex">
            <div class="item-meta">
              <h2>{{item.desHead}}</h2>
              <p>{{item.desContent}}</p>
            </div>
          </a>
          <div class="rk-items-cont rk-size-6 rk-tosize-6">
            <a v-for="(item, index) in channels.slice(10,12)" :key="'item6-' + index" :ref="item.name" :href="item.href"
              :style="{ 'background-image': 'url(' + '../../static/img/' + item.img + ')'}" :class="item.class"
              class="rk-item rk-item--flex item-11 rk-size-12 rk-tosize-6 rk-landscape rk-tosquare">
              <div class="item-meta">
                <h2>{{item.desHead}}</h2>
                <p>{{item.desContent}}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Section>
  </div>
</template>

<script>
  import Section from "../base/Section/Section";

  export default {
    data() {
      return {
        channels: [{
            name: "man",
            class: "item-1  rk-tosize-6 rk-size-12 rk-landscape",
            href: "baudu.com",
            img: "project-1.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-2 rk-size-6 rk-portrait",
            href: "baudu.com",
            img: "project-2.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-3 rk-size-6 rk-tosize-4 rk-portrait rk-tosquare",
            href: "baudu.com",
            img: "project-3.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-4 rk-size-12 rk-tosize-6 rk-landscape",
            href: "baudu.com",
            img: "project-4.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-5 rk-size-12 rk-tosize-6 rk-landscape",
            href: "baudu.com",
            img: "project-5.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-6 rk-size-6 rk-tosize-4 rk-portrait rk-tosquare",
            href: "baudu.com",
            img: "project-6.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-7 rk-size-12 rk-tosize-6 rk-square",
            href: "baudu.com",
            img: "project-7.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-8 rk-size-12 rk-tosize-6 rk-square",
            href: "baudu.com",
            img: "project-8.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-9 rk-size-8 rk-tosize-3 rk-square",
            href: "baudu.com",
            img: "project-9.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-10 rk-size-6 rk-tosize-3 rk-portrait rk-tosquare",
            href: "baudu.com",
            img: "project-10.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-11 rk-size-12 rk-tosize-6 rk-landscape rk-tosquare",
            href: "baudu.com",
            img: "project-11.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          },
          {
            name: "man",
            class: "item-12 rk-size-12 rk-tosize-6 rk-landscape rk-tosquare",
            href: "baudu.com",
            img: "project-12.jpg",
            desHead: "频道描述标题",
            desContent: "频道描述文字"
          }
        ]
      };
    },
    components: {
      Section
    }
  };

</script>

<style>
</style>
