import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Blog from '@/components/Blog/Blog'
import BlogPost from '@/components/BlogPost/BlogPost'
import About from '@/components/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog-post',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
