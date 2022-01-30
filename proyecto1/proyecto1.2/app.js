const app = new Vue({
    el: '#app',
    data: {
       titulo: "GYM con Vue",
       tareas: [],
       nuevaTarea: ''
      
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas);
            this.nuevaTarea="";
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        },
        editar: function(index){
            this.tareas[index].estado=  !this.tareas[index].estado;
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index,1);
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        }
    },
    created: function(){
            let db = JSON.parse(localStorage.getItem("gym-vue"));
            if(db === null){
                this.tareas =[];
            }else{
                this.tareas=db;
            }
    }
    
})