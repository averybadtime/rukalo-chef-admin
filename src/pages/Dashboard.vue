<template>
  <router-view></router-view>
</template>

<script>
  import DashboardPartial from "@/partials/Dashboard"
  export default {
    components: {
      DashboardPartial
    },
    mounted() {
      toggleDashboardResponsive()
    }
  }
</script>
