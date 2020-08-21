<template>
  <div>
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="column_about column is-8 landing-caption_about">
            <h1 class="title is-spaced">
              You are an SME, startup or small business?<br />
              If you want to keep up with times and grow your web presence, then
              you are in the right space!
            </h1>
            <h2 class="subtitle_about subtitle is-5 is-muted">
              At Gagma, we create websites, mobile apps, e-commerce platforms,
              API’s, open source programs and all software related to the web.
              We are a small team of professionals and we are completely good,
              communications are easy, always connected, which makes it easier
              for us to understand our client. Moreover, our primary goal in the
              end is a long-term relationship of success.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-feature-grey is-medium" id="s">
      <div class="container">
        <div class="title-wrapper has-text-centered">
          <h2 class="title is-2">Our Services</h2>
          <div class="divider is-centered"></div>
        </div>

        <div class="content-wrapper">
          <div class="columns">
            <div class="column is-one-third">
              <div
                class="feature-card is-bordered has-text-centered is-feature-reveal"
              >
                <div class="card-title">
                  <h4>Web Design</h4>
                </div>
                <div class="card-icon">
                  <img src="assets/img/icons/rocket.svg" />
                </div>
                <div class="card-text">
                  <p>
                    Our designs are easy to update and properly represents your
                    business and its vision.
                  </p>
                </div>
                <div class="card-action">
                  <a
                    href="#"
                    class="button btn-align-md primary-btn raised showConatct"
                    >Get Started</a
                  >
                </div>
              </div>
            </div>
            <div class="column">
              <div
                class="feature-card is-bordered has-text-centered is-feature-reveal"
              >
                <div class="card-title">
                  <h4>Web development</h4>
                </div>
                <div class="card-icon">
                  <img src="assets/img/icons/web.svg" />
                </div>
                <div class="card-text">
                  <p>
                    We provide the web's modern capabilities on your own sites
                    and apps.
                  </p>
                </div>
                <div class="card-action">
                  <a
                    href="#"
                    class="button btn-align-md primary-btn raised showConatct"
                    >Get Started</a
                  >
                </div>
              </div>
            </div>
            <div class="column">
              <div
                class="feature-card is-bordered has-text-centered is-feature-reveal"
              >
                <div class="card-title">
                  <h4>Mobile Development</h4>
                </div>
                <div class="card-icon">
                  <img src="assets/img/icons/light-bulb.svg" />
                </div>
                <div class="card-text">
                  <p>
                    We're not just affect your digital operations, we actually
                    transform your entire business.
                  </p>
                </div>
                <div class="card-action">
                  <a
                    href="#"
                    class="button btn-align-md primary-btn raised showConatct"
                    >Get Started</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-medium">
      <div class="container">
        <div class="title-wrapper has-text-centered">
          <h2 class="title is-2">Our Team</h2>
          <div class="divider is-centered"></div>
        </div>

        <div class="content-wrapper">
          <div class="columns is-multiline icon-list icon-list_about">
            <div class="column is-4  is-one-third">
              <div class="feature-icon has-text-centered">
                <div
                  class="icon-wrap is-icon-reveal"
                  style="with:200px:height:200px"
                ></div>
                <h4>Jamal</h4>
              </div>
            </div>
            <div class="column is-4">
              <div class="feature-icon has-text-centered">
                <div
                  class="icon-wrap is-icon-reveal"
                  style="with:200px:height:200px"
                ></div>
                <h4>Abderrahim</h4>
              </div>
            </div>
            <div class="column is-4">
              <div class="feature-icon has-text-centered">
                <div
                  class="icon-wrap is-icon-reveal"
                  style="with:200px:height:200px"
                ></div>
                <h4>El Hassan</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped>
.feature-icon .icon-wrap {
  width: 200px !important;
  height: 200px !important;
}
</style>
