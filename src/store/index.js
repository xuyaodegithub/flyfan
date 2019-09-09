import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import modules from './modules'
Vue.use(Vuex)

const store=new Vuex.Store({
    namespaced: true,//命名空间模块
    state,
    mutations,
    getters,
    actions,
    modules:{
        modules
    }
})
export default store
