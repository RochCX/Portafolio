<template>
    <div class="titulo"><a style="color: inherit;" href="https://www.instagram.com/el_ilustronco/"><i class="fa-brands fa-instagram fa-2xl" style="margin-right: 10px;"></i></a><h3 style="padding-top: 5px;">@el_ilustronco</h3></div>
    <!-- se muestra un circulo de carga cuando el estado "imagenes" no se ha cargado del todo-->
    <div class="d-flex justify-content-center m-5" v-if="!imagenes">
        <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!-- funcion que genera una lista de imagenes obtenidas a traves instagram con sus respectivos textos del post -->
    <div class="artContainer">
        <div class="ciclo" v-for="imagen in imagenes" :key="imagen.id">
            <div class="cardContainer"><img :src="imagen.display_url" alt="" class="galleryImg" crossorigin="anonymous">
                <div class="cardtext">
                    <hr>
                    <h3>{{ imagen.caption }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    computed: {
        ...mapState(['imagenes'])
    }
}
</script>

<style scoped>
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    margin: auto;
    margin-top: 15px;
}
.artContainer {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    width: 96%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
}

.cardContainer {
    background-color: whitesmoke;
    height: 75vh;
    width: auto;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid lightgray;
}

.galleryImg {
    height: 40vh;
    display: block;
    width: 100%;
    object-fit: cover;
    transition: transform 400ms ease-out;
}

.cardtext {
    padding-left: 10px;
    padding-right: 10px;
}

.cardtext h3 {
    font-size: medium;
}

.galleryImg:hover {
    transform: scale(1.07);
}
@media(max-width: 900px){
.artContainer{
    grid-template-columns: repeat(2,1fr);
}
}
</style>