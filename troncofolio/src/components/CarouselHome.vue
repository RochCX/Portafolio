<template>
    <div id="carouselExampleCaptions" class="carousel slide" style="height: 80vh;">
    <div class="carousel-inner" style="overflow: visible;">
        <div class="carousel-item active" >
        <div class="bloqueFondo" >
            <router-link to="/merch">
                <img src="../assets/ilustronco_sfondo.png"  class="img1 d-block animate__animated animate__backInRight" alt="...">
            </router-link>
        <div class="carousel-caption custom_cap">
            <h5>Ilustronco Website</h5>
            <p>Bienvenidos a mi página, soy un dibujante tirao al peo que hace caricaturas divertidas e ilustraciones mediocres con estilos variados, entre dibujos de caricatura de los 90 y monitos de videojuegos. Además encontrarás merchandising basado en mis dibujos que encontrarás al hacer click en "Merch" o encima de este simpático tronquito</p>
        </div>
        </div>
        </div>
        <div class="carousel-item">
        <div class="bloqueFondo" >
            <router-link to="/gallery">
                <img src="../assets/rayo_poemas_2.png" class="img2 d-block animate__animated animate__backInRight" alt="...">
            </router-link>
        <div class="carousel-caption custom_cap d-block">
            <h5>Visita mi galeria!</h5>
            <p>Podrás encontrar la mayoria de mis dibujos en mi plataforma de instagram @el_ilustronco, siéntete libre de visitar la galería de mis dibujos en la pestaña "galería" o has click en esta portada de libro</p>
        </div>
        </div>
        </div>
        <div class="carousel-item">
        <div class="bloqueFondo" >
            <router-link to="/comm">
                <img src="../assets//ab_2023_BN.png" class="img3 d-block animate__animated animate__backInRight" alt="...">
            </router-link>
        <div class="carousel-caption custom_cap d-block">
            <h5>Pide tu propia dibujo en nuestra plataforma!</h5>
            <p>Hago varios tipos de dibujo, Caricaturas personalizadas, monitos animados, modelos 3D (CAD), ilustraciones, logos, lo que tu pidas! si quieres ya pedir el tuyo loggeate y entra a la plataforma de comisiones! Ya tienes cuenta? haz click en comisiones o encima de este simpático sujeto!</p>
        </div>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>

<script>


</script>

<style scoped>
.carousel{
    margin-bottom: 20px;
}
.bloqueFondo{
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 75vh;
    width: 85vw;
    position: relative;
    z-index: 0;
    margin: auto;
    margin-top: 25px;
    transition: 0.5s;
    
}
.img1{
    z-index: 1;
    position: relative;
    max-width: 40vw;
    min-width: 150px;
    left: -6vw;
    top: -2vh;
    transition: 0.5s;
}
.img2{
    z-index: 1;
    position: absolute;
    max-width: 55vw;
    min-width: 150px;
    border-radius: 15px;
    left: -1vw;
    top: -1vh;
    transition: 0.5s;
}
.img3{
    z-index: 1;
    position: relative;
    max-height: 80vh;
    max-width: 40vw;
    min-width: 150px;
    left: -4vw;
    top: -10vh;
    transition: 0.5s;
}
.custom_cap{
    justify-content: flex-end;
    position: absolute;
    text-align: end;
    top: 2vh;
    right: 0;
    left: 40vw;
    margin-bottom: 200px;
    width: 40vw;
}
@media (max-width:900px){
.img1{
    z-index: 1;
    position: relative;
    max-width: 58vw;
    max-height: 48vh;
    min-width: 250px;
    left: -6vw;
    top: -2vh;
    transition: 1s;
    margin: auto;
}
.img2{
    z-index: 1;
    position: relative;
    max-width: 45vw;
    min-width: 250px;
    left: auto;
    top: -2vh;
    transition: 1s;
    margin: auto;
}
.img3{
    z-index: 1;
    position: relative;
    max-height: 60vh;
    top: -6vh;
    transition: 1s;
    margin: auto;
}
.custom_cap {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  text-align: center;
}
.bloqueFondo{
    height: 75vh;
}
.custom_cap {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    top: auto;
    right: auto;
    bottom: 0;
    justify-content: center;
    margin-bottom: 0px;
    margin-left: auto;
}

.carousel-caption h5 {
    z-index: 1;
}

.carousel-caption p {
    text-align: center;
    margin: auto;
    width: 80vw;
}

}
@media (max-width: 550px){
.img1{
    max-width: 100%;
    max-height: 40vh;
    left: 0vw;
    top: -2vh;
    transition: 0.5s;
}
.img2{
    max-width: 80vw;
    max-height: 50vh;
}
.img3{
    max-width: 80vw;
    max-height: 55vh;
    top: -11vh;
    left: 2vw;
}
.bloqueFondo{
    height: 95vh;
}
.carousel{
    height: auto;
    margin-bottom: 180px;
    font-size: small;
}
}
</style>