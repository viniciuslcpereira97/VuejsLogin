<template lang="html">

  <vue-facebook-login class="button"
    appId="157805414887234"
    @login="getUserData"
    @logout="onLogout"
    @get-initial-status="getUserData">
  </vue-facebook-login>

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
</style>
