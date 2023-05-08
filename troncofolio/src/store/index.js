import { createStore } from 'vuex'
import { getAuth, signOut } from "firebase/auth"
import router from '@/router'

const auth = getAuth()

export default createStore({
  state: {
    conexion: false,
    imagenes: null,
    correo: "",
  },
  getters: {
  },
  mutations: {
    crearGaleria(state, payload) {
      state.imagenes = payload
    },
    desconectar(state) {
      if (state.conexion == true) {
        signOut(auth).then(() => {
          state.conexion = false;
          state.correo = "";
          router.push('/')
        }).catch((error) => {
          alert(error);
        })
      } else {
        alert("Ya estas desconectado")
      }
    },
  },
  actions: {
    async feedInsta({ commit }) {
      const url = 'https://instagram-profile1.p.rapidapi.com/getfeed/el_ilustronco';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '444111f526mshf91c543c463db06p13abf9jsn950066debc47',
          'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const resultado = await response.json();
        commit('crearGaleria', resultado.media)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
