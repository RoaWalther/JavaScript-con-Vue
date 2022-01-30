Vue.component('padre',{
    template: //html
    `<div class="p-5 text-white bg-dark text-center"> 
        <h2>Componente Padre: {{numeropadre}}</h2>
        <h3>{{nombre}}</h3>
        <button class="btn btn-succes mb-3" @click="numeropadre++" > aumentar</button>
        <app :numero= "numeropadre" @nombre = "nombre =$event"></app>
    </div>`,
    data(){
        return{
            numeropadre: 0,
            nombre: ''
        }
    },

})