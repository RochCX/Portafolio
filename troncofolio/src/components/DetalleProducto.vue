<template>
  <div class="cuadroTodo">
    <div class="cuadroProducto">
      <img v-if="merch" :src="merch.imagen" alt="">
      <p v-else>Cargando...</p>
    </div>
    <div class="textos">
      <h2>{{ merch ? merch.nombre : '' }}</h2>
      <p>{{ merch ? merch.descripcion : '' }}</p>
  </div>
</div>
</template>

<script>
import router from '@/router';
import { ProductService } from '@/services/ProductService';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      merch: null,
      checkearLista: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    this.loadMerch(id);
  },
  watch: {
    '$route.params.id': function(newId) {
      this.loadMerch(newId);
    }
  },
  methods: {
    async loadMerch(id) {
      try {
        this.merch = await ProductService.getMerchById(id);
        if(this.merch === null) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Este producto no existe',
            });
            router.push('/')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  }

</script>

<style>
img{
  max-height: 75vh;
  object-fit: contain;
  border-radius: 15px;
}
.cuadroTodo{
  display: grid;
  grid-template-columns: 60vw auto;
  background-color: rgba(0, 0, 0, 0.812);
  color: white;
  max-width: 90vw;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  border-radius: 15px;
  padding: 10px;
}
.cuadroTodo p{
  align-self: center;
  margin: auto;
}
p{
  font-size: larger;
}
h2{
  margin-top: 10vh;
}
.textos{
  display:flex;
  flex-direction: column;
}
</style>

