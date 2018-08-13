import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    userId:'',
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    changeUserId(state,val){
      console.log(111111,val)
      state.userId=val;
    }
  }
});
export default store;
