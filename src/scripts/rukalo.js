// Listener para el dashboard responsive menu
function toggleDashboardResponsive () {
  $('.dashboard-responsive-nav-trigger').on('click',function(e){e.preventDefault();$(this).toggleClass('active');var dashboardNavContainer=$('body').find(".dashboard-nav");if($(this).hasClass('active')){$(dashboardNavContainer).addClass('active');}else{$(dashboardNavContainer).removeClass('active');}});
}

function toogleDashboardHeight() {
  var winWidth = $(window).width();
  var headerHeight = $("#header-container").height();
  $("#dashboard").css("padding-top", headerHeight);
  if (winWidth < 992) {
      $(".fs-inner-container.map-fixed").insertBefore(".fs-inner-container.content");
  } else {
      $(".fs-inner-container.content").insertBefore(".fs-inner-container.map-fixed");
  }
}