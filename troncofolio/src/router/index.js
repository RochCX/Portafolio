import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MerchView from '../views/MerchView.vue'
import LoginView from '../views/LoginView.vue'
import CommView from '../views/CommView.vue'
import ArtView from '../views/ArtView.vue'
import NotFound from '../views/NotFound.vue'
import DetalleProducto from '../components/DetalleProducto.vue'

import Swal from 'sweetalert2'

import store from '@/store'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const state = store.state;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/merch',
    name: 'merch',
    component:MerchView,
  },
  {
    path: '/merch/:id',
    name: 'detalle-merch',
    component: DetalleProducto
  },
  {
    path: '/login',
    name: 'login',
    component:LoginView,
  },
  {
    path: '/comm',
    name: 'comm',
    component: CommView,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: ArtView,
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found', 
    component: NotFound
   },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next) =>{
  let estadoC = eval(localStorage.getItem('localConectado'));

  onAuthStateChanged(auth,(user) =>{
    // verificador de estado ligado a Firebase
    if(user){
      state.conexion = true;
      localStorage.setItem('localConectado',state.conexion);
      state.correo = user.email;
      // puedo colocar el correo del usuario :O
      return
    } else{
      state.conexion = false;
      localStorage.setItem('localConectado',state.conexion);
      // si lo coloco debo removerlo en esta parte
      return
    }
  })
  // Si intento entrar a la vista Login estado ya conectado
  if(estadoC && to.path == '/login'){
    Swal.fire({
      title: 'Qué haces?',
      text: "Ya estás loggeado!",
      icon: 'warning',
    })
    next('/')
    return
  }
  if(!estadoC){
    // falta una vista de comisiones, ahi no estaria permitido ir sin tener conexion
    if(to.path != '/comm'){
      next();
      return
    } else{
      Swal.fire({
        title: 'Hey!',
        text: 'No puedes realizar un pedido sin haberte conectado',
        imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/389/843/de0.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Alerta',
      })
      next('/');
      return
    }
  }
  next();
})

export default router
