import Vue from "vue";
import Quiz from "./Quiz.vue";
import './styles.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Quiz)
}).$mount("#app");
