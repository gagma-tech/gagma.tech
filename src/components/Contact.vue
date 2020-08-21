<template>
  <section class="section section-light-grey is-medium">
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
              <div class="column is-6">
                <input
                  v-model="formData.model.firstName"
                  class="input is-medium"
                  type="text"
                  placeholder="First Name *"
                />
                <p>{{ formData.errors.firstName }}</p>
              </div>
              <div class="column is-6">
                <input
                  v-model="formData.model.lastName"
                  class="input is-medium"
                  type="text"
                  placeholder="Last Name *"
                />
                <p>{{ formData.errors.lastName }}</p>
              </div>
              <div class="column is-12">
                <input
                  v-model="formData.model.email"
                  class="input is-medium"
                  type="text"
                  placeholder="Email *"
                />
                <p>{{ formData.errors.email }}</p>
              </div>
              <div class="column is-12">
                <textarea
                  v-model="formData.model.content"
                  class="textarea"
                  rows="6"
                  placeholder=""
                ></textarea>
                <p>{{ formData.errors.content }}</p>
              </div>
              <div class="column is-12">
                <div class="form-footer has-text-right mt-10">
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
      success: false,
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
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            );
          },
          url: `https://docs.google.com/forms/u/0/d/e/1FAIpQLScw2EoDm-gOH7gvhIqP0wSjh8mUyknakEMbUW2zZmg6PaknEg/formResponse?${query}`,
          method: "GET",
          cache: false,
          async: true,
          crossDomain: true,
        })
          .done(() => {
            alert("done");
          })
          .fail(() => {
            alert("failed");
          });
      }
    },
  },
};
</script>

<style></style>
