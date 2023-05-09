<template>
        <nav class="navbar navbar-expand-lg" style="z-index: 100;">
    <div class="container-fluid">
        <a class="navbar-brand" style="color: white;" href="/">
            <img src="../assets/pera_cara.png" style="height: 10vh;margin-right: 15px;" alt="">
            Troncoweb</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/">Home</router-link>
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/merch">Merch</router-link> 
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/gallery">Galeria</router-link>
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/comm">Comisiones</router-link>
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0" v-if="!conexion">
                <router-link class="navBtn" to="/login" >Login</router-link>
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0" v-if="conexion">
                <a class="navBtn" data-bs-toggle="modal" data-bs-target="#loggoutModal"> Cerrar Sesion</a>
            </li>
        </ul>
        <div class="correoMuestra">
                <a id="showCorreo" class="ms-lg-auto">{{ correo }} </a>
            </div>
        </div>
    </div>
    </nav>

    <!-- Modal de cierre de sesion -->
<div class="modal fade" id="loggoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Ya te vas?</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            Quieres cerrar sesion?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="desconectar">Cerrar Sesion</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState,mapMutations} from "vuex"

export default{
    computed:{
        ...mapState(['conexion']),
        ...mapState(['correo'])
    },
    methods: {
        ...mapMutations(['desconectar'])
    },
}

</script>

<style scoped>
.navbar{
    background-color: rgba(0, 0, 0, 0.911);
}
.navbar-nav{
    font-size: large;
}
.navbar-brand{
    font-size: xx-large;
}
.navBtn{
    text-decoration: none;
    color: white;
    transition: 0.7s;
    transform: scale(1);
}
.navBtn:hover{
    cursor: pointer;
    color: green;
    transition: 0.6s;
}
.nav-item:hover{
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
    animation-timing-function: ease-in-out;
}
.correoMuestra{
    display: flex;
    align-items: flex-end;
}
#showCorreo{
    text-decoration: none;
    
    
}
</style>