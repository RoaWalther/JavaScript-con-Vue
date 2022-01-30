Vue.component('app',{
    template://html
     `<div class="py-5 bg-success"> 
         <h4>componente hijo: {{numero}}</h4>
         <h5>Nombre: {{nombre}}</h5>
     </div>`,
     props: ['numero'],
     data(){
         return {
             nombre: 'Walther'
         }
     },
     mounted(){
        this.$emit('nombre', this.nombre)
    }
})