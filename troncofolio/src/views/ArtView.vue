<template>
    <div class="d-flex justify-content-center m-5" v-if="!imagenes">
        <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
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
}</style>