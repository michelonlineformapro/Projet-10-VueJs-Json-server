//Composant menu
//Instance de vue + creation d'un composant qu s'appelle menu-nav <menu-nav></menu-nav> ou auto fermant <menu-nav />

Vue.component('test',{
    props: ['todo'],
    template: '<li><a :href="todo.url">{{ todo.text }}</a></li>'
});
/*
methods vs computed (eco de resource dans le cache)
Les propriétés calculées ont par défaut uniquement un accesseur,
mais vous pouvez également fournir un mutateur (setter) quand vous en avez besoin :
 */

let vm = new Vue({
    el:"#computed",
    data:{
        //ici des getters et des setters (accesseurs et mutateurs)
        pseudo: 'mic',
        email: 'mic@hotmail.fr'
    },
    computed:{
        allData:{
            //Par defaut seulement des accesseurs
            get: function (){
                return this.pseudo + ' ' + this.email;
            },
            //Mais on peu creer des setters avec une fonction et ses paramètres
            set: function (changeValue){
                let newValue = changeValue.split(' ');
                this.pseudo = newValue[0];
                this.email = 'top@gmail.com'
            }
        }
        //Pour le test dans la console vm.email = "jkjdfjjke" et vm.pseudo = "jjdjkfj"

    }
});

//API yes - no question avec watch: https://yesno.wtf/api
let api = new Vue({
    el:'#exemple-api',
    data:{
        question: '',
        reponse: 'Vous devez posez un question avant que je reponde !'
    },
    watch:{
      //A chaque fois que la question change cette fonction ce lance
      question: function (newQuestion, oldQuestion){
          this.reponse = "J'attend que vous aviez fini d'ecrire ..."
          //Appel d'une fonction loadsh
          this.debouncedGetReponse()
      }
    },
    created: function() {
        // _.debounce est une fonction fournie par lodash pour limiter la fréquence
        // d'exécution d'une opération particulièrement coûteuse.
        // Dans ce cas, nous voulons limiter la fréquence d'accès à
        // yesno.wtf/api, en attendant que l'utilisateur ait complètement
        // fini de taper avant de faire la requête ajax. Pour en savoir
        //  plus sur la fonction `_.debounce` (et sa cousine
        // `_.throttle`), visitez : https://lodash.com/docs#debounce
        //On lance la methode au bous de 5s apes que utilisateur est entrer ?
        this.debouncedGetReponse= _.debounce(this.getReponse, 500)
    },
    methods:{
        getReponse: function (){
            //On attend que utilisateur entre un ? pour executer la fonction
            if(this.question.indexOf('?') === -1){
                this.reponse = "Une question contient generalement un ?"
                return
            }
            this.reponse = "Je reflechis ..."
            //On remet this dans le context
            let vm = this
            axios.get('https://yesno.wtf/api')
            //On creer une promesse
                .then(function (response){
                    vm.reponse = _.capitalize(response.data.answer)
                })
            //Sinon on rejest et declenche une erreur
                .catch(function (error){
                    vm.reponse = "Erreur API est pas accessible"
                });
        }
    }
});


//Jongler avec des classe css
let css = new Vue({
    el:"#styles",
    data:{
        estVert: false,
        estRouge: false,
        padding: '10px',
        isActive: false
    },
    methods: {
        changeBackground: function (){
            this.estVert = true;
            this.estRouge = true;
            this.isActive = !this.isActive

        }
    }
});

//Creation d'un composant
//Ici on utilise is=lsit item
Vue.component('liste-item',{
    template: `<li style="color: orange; padding: 20px">{{title}}<button class="btn green red-text right" v-on:click="$emit('remove')">Supprimer</button> </li>`,
    props:['title']
})
//La legendaire todoliste
let todolist = new Vue({
    el: "#todo-list",
    data:{
        //v-model input
        nouvelleTacheTexte: '',
        //Element dans la boucle for
        taches:[
            {
                id: 1,
                title: 'Apprendre VueJs'
            }
        ],
        nextTodoId: 2
    },
    methods:{
        //<form v-on:submit.prevent
        ajouterTache: function (){
            //on ajoute la valeur input dans un tableau de taches
            this.taches.push({
                id: this.nextTodoId++,
                //v-model de input
                title: this.nouvelleTacheTexte
            });
            this.nouvelleTacheTexte = ''
        }
    }
})