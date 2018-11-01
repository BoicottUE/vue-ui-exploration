import Vue from 'vue';
import Router from 'vue-router';
import { createRouterLayout } from 'vue-router-layout';

Vue.use(Router);

const RouterLayout = createRouterLayout(layout => import(`@/layouts/${layout}.vue`));

export default new Router({
  routes: [
    {
      path: '/',
      component: RouterLayout,
    },
    {
      path: '/about',
      component: RouterLayout,
    },
    {
      path: '/test',
      component: RouterLayout,
    },
  ],
});
