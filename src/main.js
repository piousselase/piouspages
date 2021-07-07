import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCsPawRH64bygKjBEE3VFXcLw_0_jtaR0I",
  authDomain: "userrrr-8c0ca.firebaseapp.com",
  projectId: "userrrr-8c0ca",
  storageBucket: "userrrr-8c0ca.appspot.com",
  messagingSenderId: "261872576434",
  appId: "1:261872576434:web:fdcdffd69efdc48ff166ab"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
