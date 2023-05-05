import { createStore } from 'vuex'
import {getAuth, signOut} from "firebase/auth"
import router from '@/router'

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
          router.push('/')
        }).catch((error) => {
          alert(error);
        })
      } else{
        alert("Ya estas desconectado")
      }
    },
  },
  actions: {
    async crearGaleria(){
      const url = 'https://instagram-profile1.p.rapidapi.com/getfeed/el_ilustronco';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b6576869cmsh44b3ad98bee581ep14470djsn96bb8337ac59',
                'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // this.imagenes = result.media
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    }
  },
  modules: {
  }
})
