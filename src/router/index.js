import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JokesList from '../views/JokesList.vue'
import RegisterUser from '../views/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jokes',
      name: 'jokesList',
      component: JokesList,
    },
    {
      path: '/register',
      name: 'RegisterUser',
      component: RegisterUser,
    }
  ],
})

export default router
