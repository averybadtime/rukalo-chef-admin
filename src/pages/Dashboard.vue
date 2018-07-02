<template>
  <div id="dashboard">
    <!-- Navigation
    ================================================== -->

    <!-- Responsive Navigation Trigger -->
    <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
    <dashboard-nav></dashboard-nav>
    <!-- Navigation / End -->


    <!-- Content
    ================================================== -->
    <div class="dashboard-content">

      <!-- Titlebar -->
      <div id="titlebar">
        <div class="row">
          <div class="col-md-12">
            <h2>Dashboard</h2>
            <!-- Breadcrumbs -->
            <nav id="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li>Dashboard</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <router-view></router-view>

    </div>
    <!-- Content / End -->
  </div>
</template>

<script>
  import DashboardNav from "@/layouts/DashboardNav"
  export default {
    components: {
      DashboardNav
    },
    mounted() {
      toggleDashboardResponsive()
      toogleDashboardHeight()
    }
  }
</script>
