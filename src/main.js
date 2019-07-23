import Vue from "vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";
import App from "./App.vue";
import Flash from "./components/Flash.vue";
import Drag from "./components/Drag.vue";
import Phonics from "./components/Phonics";
import Match from "./components/Match.vue";
import Menu from "./components/Menu.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/flash", component: Flash },
  { path: "/drag", component: Drag },
  { path: "/home", component: Phonics },
  { path: "/app", component: App },
  { path: "/match", component: Match },
  { path: "/menu", component: Menu }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
