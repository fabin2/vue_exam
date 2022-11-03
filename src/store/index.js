import { createStore } from 'vuex'

export default createStore({
  state: {
    database: [],       // <- databse is here
    simpleList: ["name", "username", "email", "address", "phone", "website", "company"],
    objectStructure: [],
    idCounter: 10,
  },

  getters: {
  },

  mutations: {

    UPDATE_DATABASE(state, newData){
      state.database = newData;
    },

    CREATE_FROM_STRUCTURE(state, newData){
      state.objectStructure = Object.keys(newData);
    },

    EFFACER_UTILISATEUR(state, id){
      for(const [index, utilisateur] of object.entries(state.database)){
        if(utilisateur.id === id){
          state.database.splice(index, 1)
        }
      }
    },

    AJOUTER_UTILISATEUR(state, newUtilisateur){
      state.idCounter++;                                    // ++
      state.database.splice(state.database.length, 0, newUtilisateur);
    },

    MODIFIER_UTILISATEUR(state, utilisateur){
      const indexUtilisateur = state.database.findIndex(object => {
        return object.id == utilisateur.id
      })
      state.database.splice(indexUtilisateur, 1, utilisateur);
    }
  },

  actions: {
  },
  modules: {
  }
})
