<template>
  <div id="app">
    <div id="wrapper">
      <!-- start: HEADER -->
      <rukalo-header v-if="user"></rukalo-header>
      <div class="clearfix"></div>
      <!-- end: HEADER -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import path from "path"
  import RukaloHeader from "@/layouts/Header.vue"
  export default {
    components: {
      RukaloHeader
    },
    mounted() {
      this.loadScripts()
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      loadScripts() {
        // Cargo los script dinámicamente aquí, porque el DOM carga antes de que firebase de respuesta de autenticación y los elementos no alcanzan a estar creados cuando jQuery y los demás pluggins ya los están manipulando al cargar dentro del mismo.
        const root = path.resolve(__dirname, "src/scripts")
        const scripts = [
          "/mmenu.min.js",
          "/chosen.min.js",
          "/slick.min.js",
          "/rangeslider.min.js",
          "/magnific-popup.min.js",
          "/waypoints.min.js",
          "/counterup.min.js",
          "/jquery-ui.min.js",
          "/tooltips.min.js",
          "/md5.min.js",
          "/custom.js"
        ]
        scripts.forEach(script => {
          let tag = document.createElement("script")
          tag.type = "text/javascript"
          tag.src = root + script
          document.getElementsByTagName("head")[0].appendChild(tag)
        })
      }
    }
}
</script>