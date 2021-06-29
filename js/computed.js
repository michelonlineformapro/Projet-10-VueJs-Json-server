let api = new Vue({
    el:"#jsonApi",
    data: function (){
        return{
            info: null
        }
    },

    mounted() {
        axios.get('http://localhost:3000/produits')
            .then(response => this.info = response.data)
            .catch(error => console.error("Erreur de l'appel de api sur jsonserver"));
    }
})