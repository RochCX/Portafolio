import { createStore } from 'vuex'
import {getAuth, signOut} from "firebase/auth"

const auth = getAuth()

export default createStore({
  state: {
    conexion: false,
  },
  getters: {
  },
  mutations: {
    desconectar(state){
      if(state.conexion==true){
        signOut(auth).then(() => {
          state.conexion = false;
        }).catch((error) => {
          alert(error);
        })
      } else{
        alert("Ya estas desconectado")
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
