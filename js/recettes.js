//insatnce de vue

const amiiboURL = 'https://www.amiiboapi.com/api/amiibo';



new Vue({
    el:"#recettes",
    data:{
        resultat: [],
    },
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


new Vue({
    el:"#test",
    data:{
        urlCSS: "css/styles.css"
    },
    methods:{
        changeCss: function (){
            this.urlCSS = "css/styles2.css";
            alert('test de click')
        }
    }
})