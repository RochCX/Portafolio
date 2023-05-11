import { createStore } from 'vuex'
import { getAuth, signOut } from "firebase/auth"
import router from '@/router'
import Swal from 'sweetalert2'

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
          // 'X-RapidAPI-Key': 'f7064d60acmshee8183e4f73c262p1e6ffdjsn67ec8b1c3005',
          'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const resultado = await response.json();
        commit('crearGaleria', resultado.media)
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error de API',
          text: "Parece que se ha terminado el numero de request para la API",
          icon: 'warning',
        })
      }
    }
  },
  modules: {
  }
})
