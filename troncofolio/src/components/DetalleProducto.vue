<template>
  <div class="cuadroTodo">
  <div class="cuadroProducto">
    <h2>{{ merch.nombre }}</h2>
    <img :src="merch.imagen" alt="">
  </div>
  <p>{{ merch.descripcion }}</p>
</div>
</template>

<style>
.cuadroProducto{
  display: flex;
  flex-direction: column;
}
.cuadroProducto img{
  max-height: 75vh;
  object-fit: contain;
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
</style>

<script>
import { ProductService } from '@/services/ProductService';

export default {
  data() {
    return {
      merch: null
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
      } catch (error) {
        console.log(error);
      }
    }
  }
  }

</script>
