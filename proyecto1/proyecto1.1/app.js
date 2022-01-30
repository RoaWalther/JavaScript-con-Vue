const  app = new Vue({
    el: '#app',
    data: {
        fondo: "bg-danger",
        color: true,
        titulo: "Hola mundo desde Veu",
        frutas:[
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Coco', cantidad: 10}
        ],
        nuevaFruta: "",
        total:0
    },
    methods: {
        agreagarFrutas (){
        this.frutas.push({
            nombre: this.nuevaFruta, cantidad:0
        });
        this.nuevaFruta= ""
        }, 
    },
    computed: {
        sumar (){
            this.total =0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})