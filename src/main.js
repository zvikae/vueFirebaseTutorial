import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false

let app = '';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyB1lwjlrrFaz5mFgNm3wcfdDZsDI3jcbvc",
  authDomain: "booktranding.firebaseapp.com",
  databaseURL: "https://booktranding.firebaseio.com",
  projectId: "booktranding",
  storageBucket: "booktranding.appspot.com",
  messagingSenderId: "167961247094"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (app) return;
  app = new Vue ({
    router,
    render: h => h(App),
  }).$mount('#app')
})