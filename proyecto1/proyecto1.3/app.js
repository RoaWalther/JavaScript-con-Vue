const  app = new Vue({
    el: '#app',
    data: {
        palabra: "hola mundo",
        cont: 0
    },
    computed: {
        invertido (){
           return this.palabra.split("").reverse().join("");
        },
        color (){
            return{
                'bg-success': this.cont <=10,
                'bg-warning': this.cont >10 && this.cont <=20,
                'bg-danger': this.cont >20
            } 
        }
    }
})