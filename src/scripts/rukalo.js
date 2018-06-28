// Listener para el dashboard responsive menu
function toggleDashboardResponsive () {
  $('.dashboard-responsive-nav-trigger').on('click',function(e){e.preventDefault();$(this).toggleClass('active');var dashboardNavContainer=$('body').find(".dashboard-nav");if($(this).hasClass('active')){$(dashboardNavContainer).addClass('active');}else{$(dashboardNavContainer).removeClass('active');}});
}