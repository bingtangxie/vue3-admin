import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import staff from './staff'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        staff,
    }
})