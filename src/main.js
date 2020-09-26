import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueScrollReveal from 'vue-scroll-reveal'


import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'


// Firebase
  // // Your web app's Firebase configuration
  // // var firebaseConfig = {
  // //   apiKey: "AIzaSyC5BLnmfnNpvyTZkFCoYefrm6QDkCzs4Uo",
  // //   authDomain: "pizzmo1-c28ae.firebaseapp.com",
  // //   databaseURL: "https://pizzmo1-c28ae.firebaseio.com",
  // //   projectId: "pizzmo1-c28ae",
  //   storageBucket: "pizzmo1-c28ae.appspot.com",
  //   messagingSenderId: "942271728501",
  //   appId: "1:942271728501:web:de1c78833bb0ca75fe613c",
  //   measurementId: "G-5MJXF091D6"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();









Vue.use(VueResource)
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});

Vue.http.options.root = 'https://hamro-974e4.firebaseio.com'

new Vue({
  el: "#app",
  render: h => h(App),
})
