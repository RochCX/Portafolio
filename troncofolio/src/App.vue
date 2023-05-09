<template>
  <NavBar/>
  <router-view/>
  <FooterBar/>
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,600&display=swap');

#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
