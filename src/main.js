import Vue from 'vue'
import VueRouter from "vue-router"
import { store } from "./store"
import { AUTH, DB } from "./firebase"
import App from './App.vue'

import { routes } from "./routes"
import { auth } from 'firebase';

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

let app, onValue

function loadAuthUserInfo (uid) {
  return new Promise(resolve => {
    if (!uid) return resolve()

    const adminRef = DB.ref("/admin/" + uid)
    onValue = adminRef.child("profileInfo").on("value", snapshot => {
      if (snapshot.exists()) return resolve(snapshot.val())
      else return resolve(null)
    })
  })
}

AUTH.onAuthStateChanged(user => {
  const uid = user ? user.uid : null
  loadAuthUserInfo(uid).then(data => {
    if (data) {
      if (data.role === "ADMIN") {
        store.state.firebaseUser = user
        store.state.user = data
      } else {
        AUTH.signOut().then(() => console.log("Cerrando sesión..."))
        DB.ref("/admin/" + uid + "/profileInfo").off("value", onValue)
      }
    } else {
      if (uid) DB.ref("/admin/" + uid + "/profileInfo").off("value", onValue)
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
