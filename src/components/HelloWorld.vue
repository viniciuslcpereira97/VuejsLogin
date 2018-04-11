<template>
  <div>
    <facebook-login></facebook-login>
  </div>
</template>

<script>
import FacebookLogin from '@/components/FacebookLogin';

export default {
  name: 'HelloWorld',
  components: {
    FacebookLogin,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
