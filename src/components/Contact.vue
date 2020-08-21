<template>
  <section class="section section-light-grey is-medium" id="c">
    <div class="container">
      <div class="title-wrapper has-text-centered">
        <h2 class="title is-2 is-spaced">Drop us a line or two</h2>
        <h3 class="subtitle is-5 is-muted">We'd love to hear from You</h3>
        <div class="divider is-centered"></div>
      </div>

      <div class="content-wrapper">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="columns is-multiline">
              <div class="column is-12">
                <div
                  v-if="formData.success == 'ok'"
                  class="notification is-primary"
                >
                  successefull send our team wil reply shortly
                </div>
                <div
                  v-if="formData.success == 'ko'"
                  class="notification is-danger"
                >
                  Something Wrong !! check record and try again
                </div>
              </div>
              <div class="column is-6">
                <input
                  v-model="formData.model.firstName"
                  class="input is-medium"
                  type="text"
                  placeholder="First Name *"
                />
                <p v-if="formData.errors.firstName" class="err">
                  {{ formData.errors.firstName }}
                </p>
              </div>
              <div class="column is-6">
                <input
                  v-model="formData.model.lastName"
                  class="input is-medium"
                  type="text"
                  placeholder="Last Name *"
                />
                <p v-if="formData.errors.lastName" class="err">
                  {{ formData.errors.lastName }}
                </p>
              </div>
              <div class="column is-12">
                <input
                  v-model="formData.model.email"
                  class="input is-medium"
                  type="text"
                  placeholder="Email *"
                />
                <p v-if="formData.errors.email" class="err">
                  {{ formData.errors.email }}
                </p>
              </div>
              <div class="column is-12">
                <textarea
                  v-model="formData.model.content"
                  class="textarea"
                  rows="6"
                  placeholder="Description *"
                ></textarea>
                <p v-if="formData.errors.content" class="err">
                  {{ formData.errors.content }}
                </p>
              </div>
              <div class="column is-12">
                <div class="form-footer mt-10">
                  <button
                    @click="sendForm()"
                    class="button cta is-large primary-btn form-button raised is-clear"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const $ = window.$;
export default {
  name: "Contact",
  data: () => ({
    formData: {
      model: {
        firstName: "",
        lastName: "",
        email: "",
        content: "",
      },
      errors: {},
      success: "",
    },
  }),
  methods: {
    validate() {
      this.formData.errors = {};
      if (!this.formData.model.firstName) {
        this.formData.errors.firstName = "First Name is required";
        return false;
      }
      if (!this.formData.model.lastName) {
        this.formData.errors.lastName = "Last Name is required";
        return false;
      }

      if (!this.formData.model.email) {
        this.formData.errors.email = "Email is required";
        return false;
      }
      if (!this.validateEmail(this.formData.model.email)) {
        this.formData.errors.email = "Email is not valid";
        return false;
      }
      if (!this.formData.model.content) {
        this.formData.errors.content = "Description is required";
        return false;
      }
      return true; // form is valid
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendForm() {
      if (this.validate()) {
        const query = `entry.1406401266=${this.formData.model.firstName}&entry.461409218=${this.formData.model.lastName}&entry.1765786323=${this.formData.model.email}&entry.803664105=${this.formData.model.content}&submit=submit`;
        $.ajax({
          url: `https://docs.google.com/forms/u/0/d/e/1FAIpQLScw2EoDm-gOH7gvhIqP0wSjh8mUyknakEMbUW2zZmg6PaknEg/formResponse?${query}`,
          method: "GET",
          statusCode: {
            //the status code from the POST request
            0: () => {
              this.formData.success = "ok";
            },
            200: () => {
              this.formData.success = "ok";
            },
            403: () => {
              this.formData.success = "ko";
            },
          },
        });
      }
    },
  },
};
</script>

<style>
.err {
  color: red;
}
</style>
