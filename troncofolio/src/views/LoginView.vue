<template>
        <div class="form_container">
        <form name="contact-frm" action="" method="post" id="contact-frm">
            <fieldset class="field_contact">
                <div id="contenedor">
                <h1 style="font-weight: 800;">Iniciar Sesión</h1>                    
                    <input v-model.trim="formulario.correo" placeholder="Correo" type="email" name="correo_txt" id="email" class="cambio" required>
                    <input v-model.trim="formulario.password" placeholder="Asunto" type="text" name="asunto_txt" id="asunto" class="cambio" required>
                    <div class="seccionboton">
                    <button type="button" value="Enviar" id="enviar" class="btn_contact" name="enviar" @click.prevent="conectar()">ENVIAR</button>
                </div>
                </div>
            </fieldset>
        </form>
        <!-- quiero hacer un popup para hacer la nueva -->
        <div class="caja__signup">
            <div class="contCaja">
                <h1 class="titulo_signup">Hola! unete al clan tronco</h1>
                <p>Has tu propia cuenta clickeando aqui abajo, es gratis!</p>
                <button class="SignUp">Únete</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { auth } from '@/firebase/index.js';
import store from '@/store';

const estado = store.state

export default{
    name: 'LoginFire',
    data: function(){
        return {
            formulario:{
                correo:"",
                password:""
            }
        };
    },
    methods: {
        conectar(){
            auth
        .signInWithEmailAndPassword(
            this.formulario.correo,
            this.formulario.password
        )
        .then(function(){
            estado.conexion = true;
            router.push('/')
            }).catch((err) => {
            console.log(err);
            if (!estado.conexion){
                alert('Usuario o contraseña incorrectos');
            }
        })
        }
    },
}

</script>

<style scoped>
.form_container {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    margin: 15px 10px 0px 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: 85vh;
    background-color: whitesmoke;
    transition: 0.5s;
    /* background-color: #FF416C; */
 }
.seccionboton {
    display: flex;
    flex-direction: row;
    justify-content: center; }
.btn_contact {
    border-radius: 20px;
    border: 1px solid #2bceff;
    background-color: #2bceff;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    margin: 8px;
    height: 7vh;
    width: 20vw;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase; }
.caja__signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    text-align: center;
    margin: 0%;
    height: 100%;
    background: linear-gradient(to right, #2bceff, #41ff80); }
.caja__signup p {
    margin: 20px; }
#contenedor {
    display: flex;
    flex-direction: column;
    margin-top: -30px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 5px;
    text-align: center; }
#contenedor input {
    background-color: #eee;
    border: none;
    padding: 5px 15px;
    margin: 1px 0;
    width: 100%;
    border-radius: 10px; }
.SignUp {
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    background-color: rgba(0, 0, 0, 0);
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px;
    width: 20vw;
    letter-spacing: 1px;
    text-transform: uppercase; }
#contenedor h1{
    transition: 0.5s;
}

@media (max-width: 500px) {
.form_container{
    grid-template-columns: auto;
}
#contenedor{
    gap: 10px;
    margin-top: -25px;
}
    #contenedor h1{
        font-weight: 600;
        font-size: medium;
        transition: 0.5s;
    }
.contCaja h1{
    font-size: medium;
    transition: 0.5s;
    font-weight: 500;
}
.contCaja p{
    font-size: 14px;
    transition: 0.5s;
}
}
</style>