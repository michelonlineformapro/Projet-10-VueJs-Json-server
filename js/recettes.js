//insatnce de vue

new Vue({
    el:"#recettes",
    data(){
        return{
            info: null
        }
    },
    //Cycle de vie mounted lorsque el: est monté
    mounted() {
        //on utilise axios et la methode GET + url
        axios.get('https://www.amiiboapi.com/api/amiibo')
            .then(response => this.info = response.data.amiibo)
    }
})