import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AcademicCareerView from '../views/AcademicCareerView.vue'
import WorkingExperienceView from '../views/WorkingExperienceView.vue'
import SkillsView from '../views/SkillsView.vue'
import WhatOthersSayView from '../views/WhatOthersSayView.vue'
import AnimalsIWorkedWithView from '../views/AnimalsIWorkedWithView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/animals',
    name: 'animals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimalsView.vue')
  },
  {
    path:'/working-experience' ,
    name:'working-experience',
    component:WorkingExperienceView
  },
  {
    path:'/academic-career',
    name:'academic-career',
    component:AcademicCareerView
  },
  {
    path:'/skills',
    name:'skills',
    component:SkillsView
  },
  {
    path:'/what-others-say',
    name:'what-others-say',
    component: WhatOthersSayView
  },
  {
    path: '/animals-i-worked-with',
    name: 'animals-i-worked-with',
    component: AnimalsIWorkedWithView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
