<template>
    <div id="carouselExampleCaptions" class="carousel slide" style="height: 80vh;">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" style="overflow: visible;">
        <div class="carousel-item active" >
        <div class="bloqueFondo" >
            <router-link to="/merch">
                <img src="../assets/ilustronco_sfondo.png"  class="img1 d-block animate__animated animate__backInRight" alt="...">
            </router-link>
        <div class="carousel-caption d-block animate__animated animate__backInRight">
            <h5>Ilustronco Website</h5>
            <p>Bienvenidos a mi pagina, pide tus propios dibujos aqui.</p>
        </div>
        </div>
        </div>
        <div class="carousel-item">
        <div class="bloqueFondo" >
            <router-link to="/gallery">
                <img src="../assets/lupuloon.png" class="img2 d-block animate__animated animate__backInRight" alt="...">
            </router-link>
        <div class="carousel-caption d-block animate__animated animate__backInRight">
            <h5>Visita mi galeria</h5>
            <p>ijabdfiufadsb</p>
        </div>
        </div>
        </div>
        <div class="carousel-item">
        <div class="bloqueFondo" >
            <router-link to="/comm">
                <img src="../assets//ab_2023_BN.png" class="img3 d-block animate__animated animate__backInRight" alt="...">
            </router-link>
        <div class="carousel-caption d-block animate__animated animate__backInRight">
            <h5>Pide tu propia comisión en nuestra plataforma</h5>
            <p>Bienvenidos a mi pagina, pide tus propios dibujos aqui.</p>
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
.carosuel{
    margin-bottom: 80px;
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
    position: relative;
    max-width: 60vw;
    min-width: 150px;
    left: -8vw;
    top: -2vh;
    transition: 0.5s;
}
.img3{
    z-index: 1;
    position: relative;
    max-height: 520px;
    max-width: 40vw;
    min-width: 150px;
    left: -4vw;
    top: -10vh;
    transition: 0.5s;
}
.carousel-caption{
    text-align: end;
    margin-bottom: 200px;
}
@media (max-width:768px){
.img1{
    z-index: 1;
    position: relative;
    max-width: 58vw;
    min-width: 250px;
    left: -6vw;
    top: -2vh;
    transition: 1s;
    margin: auto;
}
.img2{
    z-index: 1;
    position: relative;
    max-width: 95vw;
    min-width: 250px;
    left: -4vw;
    top: 0;
    transition: 1s;
    margin: auto;
}
.img3{
    z-index: 1;
    position: relative;
    max-width: 50vw;
    top: -6vh;
    transition: 1s;
    margin: auto;
}
.bloqueFondo{
    height: 75vh;
}
.carousel-caption{
    text-align: center;
    margin-bottom: 0%;
}

}
@media (max-width: 550px){
    .img1{
    max-width: 100%;
    left: 0vw;
    top: 6vh;
    transition: 0.5s;
}
.img2{
    top: 8vh;
    max-width: 500px;
    left: -15vw;
}
.img3{
    max-width: 80vw;
    top: -1vh;
    left: 2vw;
}
}
</style>