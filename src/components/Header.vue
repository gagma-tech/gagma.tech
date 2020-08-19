<template>
  <section class="hero  is-default is-bold">
    <nav
      class="navbar is-fresh is-transparent no-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img
              src="assets/img/logos/gagma-logo.png"
              alt=""
              width="112"
              height="36"
            />
          </router-link>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-menu" class="navbar-menu is-static">
          <div class="navbar-end">
            <a href="#s" class="navbar-item is-secondary">
              Our Services
            </a>
            <router-link
              to="/about"
              @click.native="removeMenu()"
              class="navbar-item is-secondary modal-trigger"
              data-modal="auth-modal"
            >
              About Us
            </router-link>
            <a class="navbar-item" name="contact">
              <span
                class="button signup-button rounded secondary-btn raised showConatct"
              >
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <nav
      id="navbar-clone"
      class="navbar is-fresh is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src="assets/img/logos/gagma-logo.png"
              alt=""
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="cloned-navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="cloned-navbar-menu" class="navbar-menu is-fixed">
          <div class="navbar-end">
            <a href="#s" class="navbar-item is-secondary">
              Our Services
            </a>
            <router-link
              to="/about"
              @click.native="removeMenu()"
              class="navbar-item is-secondary modal-trigger"
              data-modal="auth-modal"
            >
              About Us
            </router-link>
            <a class="navbar-item" name="contact">
              <span
                class="button signup-button rounded secondary-btn raised showConatct"
              >
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
let $ = window.$;
export default {
  name: "Header",

  methods: {
    removeMenu() {
      var menu_id = $(".navbar-burger").attr("data-target");
      $(".navbar-burger").toggleClass("is-active");
      $("#" + menu_id).toggleClass("is-active");
      $(".navbar.is-light").toggleClass("is-dark-mobile");
    },
  },
};
</script>

<style></style>
