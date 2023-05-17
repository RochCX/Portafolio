<template>
    <div class="row row-cols-md-2 g-4 mt-1">
        <!-- generacion de lista de merch-->
        <div class="col-lg-3" v-for="merch in listaP" :key="merch.id">
            <div class="card">
                <router-link :to="'/merch/' + merch.id"><img :src="merch.imagen" class="imgCard"></router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    margin: auto;
    width: 21vw;
    height: 35vh;
    overflow: hidden;
    object-fit: cover;
    position: relative;
    display: flex;
    align-items: center;
}
.imgCard{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0; left: 0; bottom: 0; right: 0;
    margin: auto;
    transition: 0.5s;
}
.imgCard:hover{
    transform: scale(1.1);
}
@media (max-width: 990px){
    .card{
        width: 45vw;
    }
}
@media (max-width: 768px){
    .card{
        width: 90vw;
    }
}

</style>

<script>
import { ProductService } from '@/services/ProductService';

export default{
    data: function(){
        return {
            listaP:[],
        }
    },
    created: async function(){
        try{
            let respuesta = await ProductService.getAllMerch();
            this.listaP = respuesta;
        } catch (error){
            this.errormessage = error
        }
    }
}
</script>