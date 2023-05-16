<template>
    <!-- formulario para ingresar un pedido de dibujo -->
    <form class="commform row g-3">
        <h2>Plataforma de Comisiones</h2>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Correo</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" :value="correo" aria-label="Disabled input example" disabled>
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Nombre</label>
            <input v-model="inputNombre" type="text" class="form-control" id="validationCustom01" required>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Apellido</label>
            <input v-model="inputApellido" type="text" class="form-control" id="validationCustom02" required>
        </div>
        <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Teléfono</label>
            <input v-model="inputTelefono" type="text" class="form-control" id="validationCustom03" required>
        </div>
        <fieldset class="dibujo row mb-4 mt-4">
            <legend class="col-form-label col-sm-6 pt-0">Escoja el tipo de dibujo</legend>
            <div class="col-sm-4">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" :value="true"
                        v-model="checkeo" checked>
                    <label class="form-check-label" for="gridRadios1">
                        Tradicional
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" :value="false"
                        v-model="checkeo">
                    <label class="form-check-label" for="gridRadios2">
                        Digital
                    </label>
                </div>
            </div>
        </fieldset>
        <!-- Si el valor checkbox "Tradicional" esta marcado el siguiente div estara visible -->
        <div class="row mb-4" v-if="checkeo">
            <div class="col-md-6">
                <label for="direccionD" class="form-label">Direccion de despacho</label>
                <input v-model="inputDireccion" type="text" class="form-control" id="direccionD" required>
            </div>
            <div class="col-md-3">
                <label for="regionS" class="form-label">Region</label>
                <!-- se arma un select de la lista obtenida por RegionService -->
                <select class="form-select" id="regionS" v-model=inputRegion required>
                    <option v-for="regionA in ListaR" :key="regionA.region">{{ regionA.region }}</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="cPostal" class="form-label">Codigo Postal</label>
                <input v-model="inputPostal" type="text" class="form-control" id="cPostal" required>
            </div>
        </div>
        <!-- aqui el usuario debe escribir los detalles de su dibujo -->
        <div class="form-floating">
            <textarea v-model="inputComentarios" class="form-control" placeholder="Instrucciones de dibujo" id="floatingTextarea" required></textarea>
            <label style="font-size:small;" for="floatingTextarea">Escriba lo que necesite</label>
        </div>
        <div>
            <div class="row mb-4 justify-content-center">
                <div class="row">
                    <div class="col-md-6"><h5>Inserte link de referencia</h5></div>
                    <div class="col-md-2">
                        <!-- boton agrega un input a la lista URLs -->
                        <button class="btn btn-primary mb-1 btnform" @click.prevent="addUrl">Agregar URL</button>
                    </div>
                </div>
                <!-- Se obtiene una lista modificable de input para agregar URLs de imagenes -->
                <div class="row mb-1" v-for="(url, index) in urls" :key="index">
                    <div class="col-md-8">
                        <input class="form-control" type="url" v-model="url.value" :required="url.required"/>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-primary btnform1" @click.prevent="removeUrl(index)">Eliminar URL</button>
                    </div>
                </div>
                
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="envioForm()">Enviar solicitud de comisión</button>
    </form>
</template>

<script>
import { RegionService } from '@/services/RegionService';
import { mapState } from 'vuex';
import Swal from 'sweetalert2';
import router from '@/router';

export default {
    data: function () {
        return {
            checkeo: true,
            urls: [{ value: "", required: true}],
            ListaR: [],
            inputNombre: "",
            inputApellido: "",
            inputTelefono: "",
            inputDireccion: "",
            inputRegion: "",
            inputPostal: "",
            inputComentarios: "",
        }
    },
    computed:{
        ...mapState(['correo']),
    },
    methods: {
        // cadena de validadores para validar los datos del pedido del dibujo
        envioForm(){
            if (!this.inputNombre) {
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, ingrese un nombre',
                });
                return;
            }
            if(!this.inputApellido){
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, ingrese un apellido',
                });
                return;
            }
            if(!this.inputTelefono){
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, ingrese un teléfono',
                });
                return;
            }
            const numeroFono = parseInt(this.inputTelefono)
            if(numeroFono.toString().length !== 9){
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, ingrese un teléfono válido',
                });
                return;
            }
            if((!this.inputDireccion || !this.inputRegion || !this.inputPostal) && this.checkeo == true){
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, ingrese todos los datos',
                });
                return;
            }
            if(parseInt(this.inputPostal).toString().length !== 7){
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, ingrese codigo postal correcto',
                });
                return;
            }
            if(!this.inputComentarios){
                Swal.fire({
                icon: 'error',
                title: 'Error de ingreso',
                text: 'Por favor, escriba la descripcion del dibujo (muy importante!)',
                });
                return;
            }
            for(const url of this.urls){
                if(!url.value){
                    Swal.fire({
                    icon: 'error',
                    title: 'Error de ingreso',
                    text: 'Por favor, rellene todos los links de referencia, sinó elimínelos',
                    });
                    return;
                }
            }
            Swal.fire({
            title: 'Comisión enviada con éxito! Gracias <3!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
            })
            router.push('/')
        },
        // funcion que agrega el input url
        addUrl() {
            this.urls.push({ value: "", required: true});
        },
        // remueve el input url segun el boton que este al lado
        removeUrl(index) {
            this.urls.splice(index, 1);
        }
    },
    // obtencion de lista de regiones para el select
    created: async function() {
        try {
            let response = await RegionService.getRegiones();
            this.ListaR = response;
            } catch (error) {
            this.errorMessage = error;
            }
    },
};


</script>

<style scoped>
.dibujo{
    background-color: white;
    border-radius: 15px;
    margin: auto;
    width: 70vw;
    padding-top: 10px;
    padding-bottom: 10px;
}
.commform {
    font-size: large;
    margin: auto;
    margin-top: 15px;
    width: 95vw;
    height: 85vh;
    background: linear-gradient(to right, #2bceffa8, #41ff80b7);
    padding: 20px;
    overflow-y: scroll;
    border-radius: 15px;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    border: 1px solid lightgray;
}
.btnform{
    border-radius: 20px;
    border: 1px solid #2bceff;
    background-color: #2bceff;
    font-size: 15px;
    font-weight: bold;
    width: 150px;
}
.btnform1{
    border-radius: 20px;
    border: 1px solid #b4991f;
    background-color: #ffd82b;
    font-size: 15px;
    font-weight: bold;
    width: 150px;
}
@media(max-width: 768px){
    .commform {
    font-size: medium;
    }
}
</style>