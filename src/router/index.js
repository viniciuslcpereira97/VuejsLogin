import Vue from 'vue';
import Router from 'vue-router';
import FacebookLogin from '@/components/FacebookLogin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: FacebookLogin,
    },
  ],
});
