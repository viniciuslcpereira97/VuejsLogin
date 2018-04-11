<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col s12 m5 offset-m3">
        <div class="card-panel grey darken-1">

          <h4 class="white-text">Bem vindo ao Fiscaluno</h4>

          <vue-facebook-login class="button"
            appId="157805414887234"
            @login="getUserData"
            @logout="onLogout"
            @get-initial-status="getUserData">
          </vue-facebook-login>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueFacebookLogin from 'facebook-login-vuejs';

export default {
  name: 'FacebookLogin',
  components: {
    VueFacebookLogin,
  },

  methods: {
    getUserData(response) {
      console.log(response);
    },
    onLogout(response) {
      console.log(response);
    },
  },

};

</script>

<style lang="css">
  button img, .spinner {
    visibility: hidden;
  }
  button:hover {
    cursor: pointer;
  }
</style>
