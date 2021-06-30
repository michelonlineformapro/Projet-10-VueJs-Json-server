//insatnce de vue

new Vue({
    el:"#apiJson",
    data(){
        return{
            rechercher: [],
            produits: []
        }
    },
    //Cycle de vie mounted lorsque el: est monté
    mounted() {
        //on utilise axios et la methode GET + url
        axios.get('http://localhost:3000/produits')
            .then(response => this.produits = response.data)
            .then(this.appelApi)
    },
    methods:{
        appelApi: async function(){
            const response = await fetch('http://localhost:3000/produits')
            this.produits = await  response.json();
        }
    }
})

