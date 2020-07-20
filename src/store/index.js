import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    dataMundial: [],
    paisesCovid: [],
    dataHistorico: []
  },
  mutations: {
    llenarDatos(state, dataAction){
      state.data = dataAction
    },
    llenarDatosMundiales(state, dataAction){
        state.dataMundial = dataAction
    },

    llenarDatosHistoricos(state, dataAction){
      state.dataHistorico = dataAction
    }

  },
  actions: {
    obtenerData: async function({ commit }){
      const data = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
      const datos = await data.json();
      commit('llenarDatos', datos);
  },

    obtenerDataMundial: async function({ commit }){
      const data = await fetch('https://coronavirus-19-api.herokuapp.com/all');
      const mundiales = await data.json();
      commit('llenarDatosMundiales', mundiales);
  },

  obtenerHistorico: async function({ commit }){
    const data = await fetch('https://corona.lmao.ninja/v2/historical');
    const historico = await data.json();
    commit('llenarDatosHistoricos', historico);
}
  },
  modules: {
  }
})
