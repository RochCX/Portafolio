<template>
    <div class="Error">
        <img src="https://i.imgflip.com/3kz0gj.png" alt="">
        <h5>Error 404</h5>
        <p>Página no encontrada</p>
        <a href="/"><button>Volver al Inicio</button></a>
    </div>
</template>

<style scoped>
.Error{
    background-color: rgba(0, 0, 0, 0.792);
    border-radius: 15px;
    padding: 10px;
    margin: auto;
    margin-top: 15px;
    width: 75vw;
    min-width: 300px;
    color: white;
}
img{
    height: auto;
    width: 45vw;
    max-height: 400px;
    margin-bottom: 10px;
}
button{
    border-radius: 20px;
    border: 1px solid #2bceff;
    background-color: #2bceff;
    font-size: 15px;
    font-weight: bold;
    width: 150px;
}
</style>