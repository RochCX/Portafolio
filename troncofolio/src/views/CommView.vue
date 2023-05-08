<template>
    <!-- aqui debe ir un formulario para ingresar una comision de dibujo -->
    <form class="commform row g-3">
        <h2>Plataforma de Comisiones</h2>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Correo</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" aria-label="Disabled input example" disabled>
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationCustom01" required>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="validationCustom02" required>
        </div>
        <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Telefono</label>
            <input type="text" class="form-control" id="validationCustom03" required>
        </div>
        <fieldset class="row mb-4 mt-4">
            <legend class="col-form-label col-sm-2 pt-0">Escoja el tipo de dibujo</legend>
            <div class="col-sm-2">
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
        <div class="row mb-4" v-if="checkeo">
            <div class="col-md-6">
                <label for="direccionD" class="form-label">Direccion de despacho</label>
                <input type="text" class="form-control" id="direccionD" required>
            </div>
            <div class="col-md-3">
                <label for="regionS" class="form-label">Region</label>
                <select class="form-select" id="regionS" v-model=region required>
                    <option v-for="region in listaR" :key="region.region">{{ region.region }}</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="cPostal" class="form-label">Codigo Postal</label>
                <input type="text" class="form-control" id="cPostal" required>
            </div>
        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Instrucciones de dibujo" id="floatingTextarea" required></textarea>
            <label for="floatingTextarea">Escriba lo que necesite</label>
        </div>
        <div>
            <div class="row mb-4 justify-content-center">
                <h5>Inserte link de referencia</h5>
                <div class="row mb-1" v-for="(url, index) in urls" :key="index">
                    <div class="col-md-8">
                        <input class="form-control" type="url" v-model="url.value" required />
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-primary" @click.prevent="removeUrl(index)">Eliminar URL</button>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-primary" @click.prevent="addUrl">Agregar URL</button>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</template>

<script>
import { RegionService } from '@/services/RegionService';

export default {
    data: function () {
        return {
            checkeo: true,
            urls: [{ link: "" }],
            listaR: [],
        }
    },
    methods: {
        addUrl() {
            this.urls.push({ link: "" });
        },
        removeUrl(index) {
            this.urls.splice(index, 1);
        }
    },
    created: async function() {
        try {
            let response = await RegionService.getRegiones();
            this.listaR = response;
            } catch (error) {
            this.errorMessage = error;
            }
    },
};


</script>

<style scoped>
.commform {
    margin: auto;
    margin-top: 15px;
    width: 85vw;
    height: 75vh;
    background-color: bisque;
    padding: 20px;
    overflow-y: scroll;
}
</style>