// hacer sus 12 productos
export class ProductService{
    static merchs = [
        {
            "id": "img1",
            "nombre":"Gorro Palmera",
            "descripcion":"Gorro con diseño veraniego con costuras del himlaya y aeroventilas para su cabeza",
            "imagen": require("@/assets/merch/img1.jpg"),
        },
        {
            "id": "img2",
            "nombre":"BMO enojón",
            "descripcion":"Pequeña escultura de BMO enojado de 10cm de altura, puede sostener lapices, cables y otros utensilios",
            "imagen": require("../assets/merch/img2.jpg"),
        },
        {
            "id": "img3",
            "nombre":"Gorro Montaña",
            "descripcion":"Gorro de color terracota con parche con diseño mostañes, tallas medianas a XL",
            "imagen": require("../assets/merch/img3.jpg"),
        },
        {
            "id": "img4",
            "nombre":"Gorro *Underground Snax*",
            "descripcion":"Gorro negro con bordado a mano con un diseño noventero, genial regalo para los nostálgicos",
            "imagen": require("../assets/merch/img4.jpg"),
        },
        {
            "id": "img5",
            "nombre":"Gato espacial",
            "descripcion":"Pequeña figura de porcelana y plástico de 20 cm de un gato naranja espacial",
            "imagen": require("../assets/merch/img5.jpg"),
        },
        {
            "id": "img6",
            "nombre":"Polera para mujer *Dead piece*",
            "descripcion":"Polera de diseño under con un estampado de vinilo de una mano esquelética haciendo el signo de paz",
            "imagen": require("../assets/merch/img6.jpg"),
        },
        {
            "id": "img7",
            "nombre":"Polera para hombre *Dead piece*",
            "descripcion":"Polera de diseño under con un estampado de vinilo de una mano esquelética haciendo el signo de paz",
            "imagen": require("../assets/merch/img7.jpg"),
        },
        {
            "id": "img8",
            "nombre":"Polera *Choose Love*",
            "descripcion":"Polera con diseño de impresion directa de alta calidad, 90%algodon y 10% elastano",
            "imagen": require("../assets/merch/img8.jpg"),
        },
        {
            "id": "img9",
            "nombre":"Tazón *Fill me up with tea",
            "descripcion":"Tazon de cerámico de doble capa con diseño estampado, ideal para los fanáticos del té",
            "imagen": require("../assets/merch/img9.jpg"),
        },
        {
            "id": "img10",
            "nombre":"Gorro *Worthy*",
            "descripcion":"Gorro de tela con bordado y visera rígida, regalo perfecto para aquellos que se crean la cereza del pastel",
            "imagen": require("../assets/merch/img10.jpg"),
        },
        {
            "id": "img11",
            "nombre":"Polera 705",
            "descripcion":"Polera de algodon egipcio con estampado de 705",
            "imagen": require("../assets/merch/img11.jpg"),
        },
        {
            "id": "img12",
            "nombre":"Patito de hule",
            "descripcion":"Patito de hule",
            "imagen": require("../assets/merch/img12.jpg"),
        },
    ]
    // obtencion de lista completa de merchandising
static getAllMerch() {
    return this.merchs;
    }
    // obtencion de objeto por id, si no existe retorna null
static getMerchById(id) {
        return this.merchs.find(merch => merch.id === id) || null;
    }
}