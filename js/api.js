//insatnce de vue

new Vue({
    el:"#apiJson",
    data(){
        return{
            //Tableau vide des resultats de la recherche (input v-model="rechercher")
            rechercher: [],
            //Tableau vide des produits collection db.json
            produits: [],
            checkedNames:[]
        }
    },
    //Cycle de vie mounted lorsque el: est monté
    mounted() {
        //on utilise axios et la methode GET + url
        axios.get('http://localhost:3000/produits')
            //Promesse pour afficher les resultats dans le tableau produits
            .then(response => this.produits = response.data)
            .then(this.appelApi)
    },
    //Fonction des resultats de recherche
    methods:{
        appelApi: async function(){
            //Parcours de la collestion depuis input type text
            const response = await fetch('http://localhost:3000/produits')
            this.rechercher = this.checkedNames.toString();
            //Reponse au format json
            this.produits = await  response.json();
        },

    },
})

