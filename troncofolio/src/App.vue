<template>
<div class="page-container">
  <div class="wrapper">
    <NavBar/>
    <router-view v-slot="{ Component }">
  <transition name="slide-fade">
    <component :is="Component" />
  </transition>
</router-view>
  </div>
  <FooterBar/>
</div>

</template>

<script>
import NavBar from "./components/NavBar.vue"
import { mapActions } from "vuex";
import FooterBar from "./components/FooterBar.vue"

export default{
  
  components: {
    NavBar,
    FooterBar,
  },
  computed:{
    ...mapActions(['feedInsta']),
  },
  async created(){
    await this.feedInsta
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,600&display=swap');
body{
  background-image: url('@/assets/Inefable_Lata_FHD_VUE.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.page-container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.wrapper{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
/*
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
