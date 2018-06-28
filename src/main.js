import Vue from 'vue'
import VueRouter from "vue-router"
import { store } from "./store"
import { AUTH, DB } from "./firebase"
import App from './App.vue'

import { routes } from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = AUTH.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next("/")
  else if (!requiresAuth && currentUser) next("/dashboard")
  else next() 
})

function getUserInfo(uid) {
  return new Promise(resolve => {
    if (!uid) return resolve(null)
    store.state.authOnValue = DB.ref("/admin/" + uid).on("value", snapshot => {
      store.state.user = snapshot.profile
      return resolve(snapshot.val())
    })
  })
}

let app

AUTH.onAuthStateChanged(user => {
  const uid = user ? user.uid : null
  getUserInfo(uid).then(userData => {
    if (userData) {
      store.state.user = userData
    }
    if (!app) {
      new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
      })
    }
  })
})
