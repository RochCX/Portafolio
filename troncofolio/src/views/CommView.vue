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
export default {
    data: function () {
        return {
            checkeo: true,
            urls: [{ link: "" }],
            listaR: [
                {
                    region: "Arica y Parinacota",
                    comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
                },
                {
                    region: "Tarapacá",
                    comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
                },
                {
                    region: "Antofagasta",
                    comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
                },
                {
                    region: "Atacama",
                    comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
                },
                {
                    region: "Coquimbo",
                    comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
                },
                {
                    region: "Valparaíso",
                    comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
                },
                {
                    region: "Región del Libertador Gral. Bernardo O’Higgins",
                    comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
                },
                {
                    region: "Región del Maule",
                    comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
                },
                {
                    region: "Región de Ñuble",
                    comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
                },
                {
                    region: "Región del Biobío",
                    comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
                },
                {
                    region: "Región de la Araucanía",
                    comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
                },
                {
                    region: "Región de Los Ríos",
                    comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
                },
                {
                    region: "Región de Los Lagos",
                    comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
                },
                {
                    region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
                    comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
                },
                {
                    region: "Región de Magallanes y de la Antártica Chilena",
                    comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
                },
                {
                    region: "Región Metropolitana de Santiago",
                    comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
                }
            ]
        }
    },
    methods: {
        addUrl() {
            this.urls.push({ link: "" });
        },
        removeUrl(index) {
            this.urls.splice(index, 1);
        }
    }
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