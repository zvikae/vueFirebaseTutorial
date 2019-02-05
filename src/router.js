import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import About from './views/About.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

const router = new Router({
   routes: [
      {
         path: '*',
         redirect: '/login',
      },
      {
         path: '/',
         redirect: '/login',
      },
      {
         path: '/home',
         name: 'home',
         component: Home,
         meta: {
            requiredAuth: true
         }
      },
      {
         path: '/about',
         name: 'about',
         component: About
      },
      {
         path: '/login',
         name: 'Login',
         component: Login
      },
      {
         path: '/sign-up',
         name: 'SignUp',
         component: SignUp
      },
      
   ]
});

router.beforeEach((to, from, next) => {
   const currentUser = firebase.auth().currentUser;
   const requiresAuth = to.matched.some(record => record.meta.requiredAuth);
   if (requiresAuth && !currentUser) next ('login');
   else if (!requiresAuth && currentUser) next ('home');
   else next();
});

export default router;
