// hacer sus 12 productos
export class ProductService{
    static merchs = [
        {
            "id": "img1",
            "nombre":"",
            "descripcion":"",
            "imagen": require("@/assets/merch/img1.jpg"),
        },
        {
            "id": "img2",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img2.jpg"),
        },
        {
            "id": "img3",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img3.jpg"),
        },
        {
            "id": "img4",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img4.jpg"),
        },
        {
            "id": "img5",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img5.jpg"),
        },
        {
            "id": "img6",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img6.jpg"),
        },
        {
            "id": "img7",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img7.jpg"),
        },
        {
            "id": "img8",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img8.jpg"),
        },
        {
            "id": "img9",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img9.jpg"),
        },
        {
            "id": "img10",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img10.jpg"),
        },
        {
            "id": "img11",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img11.jpg"),
        },
        {
            "id": "img12",
            "nombre":"",
            "descripcion":"",
            "imagen": require("../assets/merch/img12.jpg"),
        },
    ]
static getAllMerch() {
    return this.merchs;
    }
}