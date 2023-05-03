<template>
    <div id="carouselExampleCaptions" class="carousel slide" style="height: 95vh;">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" style="overflow: visible;">
        <div class="carousel-item active" >
        <div class="bloqueFondo" >
        <img src="../assets/ilustronco_sfondo.png" class="d-block animate__animated animate__backInRight" alt="...">
        <div class="carousel-caption d-block animate__animated animate__backInRight">
            <h5>Ilustronco Website</h5>
            <p>Bienvenidos a mi pagina, pide tus propios dibujos aqui.</p>
        </div>
        </div>
        </div>
        <div class="carousel-item">
        <img src="../assets/logo.png" class="d-block w-100 " alt="...">
        <div class="carousel-caption d-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="../assets/logo.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
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
.bloqueFondo{
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 65vh;
    width: 85vw;
    position: relative;
    z-index: 0;
    margin: auto;
    margin-top: 100px;
    transition: 0.5s;
    
}
.carousel-item.active .bloqueFondo img{
    z-index: 1;
    position: relative;
    max-width: 40vw;
    min-width: 390px;
    left: -6vw;
    top: -2vh;
    transition: 0.5s;
}
.carousel-caption{
    text-align: end;
    margin-bottom: 200px;
}
@media (max-width:900px){
    .carousel-item.active .bloqueFondo img{
    z-index: 1;
    position: relative;
    max-width: 40vw;
    min-width: 390px;
    left: -6vw;
    top: -2vh;
    transition: 1s;
    margin: auto;
}
.bloqueFondo{
    height: 75vh;
}
}
</style>