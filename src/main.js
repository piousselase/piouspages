import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDwZ7CHcxlwID4bakPu5CpoFpLH8UASol4",
  authDomain: "selasepages.firebaseapp.com",
  projectId: "selasepages",
  storageBucket: "selasepages.appspot.com",
  messagingSenderId: "852023853605",
  appId: "1:852023853605:web:bedb17574e8f61503875cc",
  measurementId: "G-6X49J2PV96"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
