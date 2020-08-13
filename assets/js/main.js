"use strict";

initPreloader();
$(document).ready(function () {
  feather.replace();
  initNavbar();
  initMobileMenu();
  initSidebar();
  initModals();
  initScrollReveal();
  initBackToTop();
  initBackgroundImages();
  initScrollToHash();
  showContact("#contact_us");
  showContact("#contact_us_p");
});
