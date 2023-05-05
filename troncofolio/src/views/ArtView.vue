<template>
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
export default {
    data() {
        return {
            imagenes: null,
        }
    },
    async created() {

        // const url = 'https://instagram-profile1.p.rapidapi.com/getfeed/el_ilustronco';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '7b6576869cmsh44b3ad98bee581ep14470djsn96bb8337ac59',
        //         'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
        //     }
        // };

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.json();
        //     this.imagenes = result.media
        // } catch (error) {
        //     console.error(error);
        // }
    },
}
</script>

<style scoped>
.artContainer {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4,1fr);
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
  transition: transform 400ms ease-out; }

  .cardtext {
  padding-left: 10px;
  padding-right: 10px; }
  .cardtext h3 {
    font-size: medium; }
    .galleryImg:hover {
  transform: scale(1.07); }

</style>