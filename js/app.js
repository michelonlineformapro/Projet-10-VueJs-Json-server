//Un titre dynamique


//Titre de la page h3
//Instance de Vue
let app = new Vue({
    //prend en valeur un element HTML de type Element (balise ou tag) ou chaine de caractère selecteur CSS
    el: "#titre",
    //prend en valeur un objet qui représente le modèle  = liste ensemble des données réactive de l'intance de vue
    //la valeur de ses données a un insatnt t représente l'etat de l'application
    data: {
        titre: "1) Un titre reactif"
    }
});

//Lier un attribut a un elment HTML
//Nouvelle insatnce de Vue
new Vue({
    el: "#survol",
    data:{
        message: "Ici on ajoute des chaine de caractère et une fonction native de Javascript (Date) : \nBonjour nous somme le : " + new Date().toDateString()
    }
});

//Un input reactif
let input = new Vue({
    el:"#input-reatif",
    data:{
        //init de la valeur de input
        message: ""
    }
})

//Condition
let cond = new Vue({
    el: "#cond",
    data:{
        nombre: 1
    },
    template:
        `
          
          <div class="card hoverable">
          <h4 class="orange-text">Condition v-if - v-else-id et v-else</h4>
          <p>Pour le test = nom de la variable cond + nombre (qui est dans le data-binding)  = 1 - 2 ou 3</p>
          <span v-if="nombre === 1">Le nombre vaut = 1</span>
          <span v-else-if="nombre === 2">Le nombre vaut = 2</span>
          <span v-else>Le nombre vaut = 3</span>
          </div>
      `,
})

//Show hide element
new Vue({
    el: "#condition",
    data:{
        codeHTML: '<h6 class="blue-grey-text">ICI UN TITRE H6 avec des balises HTML dans le Js</h6>',
        voir: true,
        message: "Visible ?",
        nombre: 2,
        variable: false

    },

    methods:{
        show: function (){
            this.message = "";
            this.voir = false;
        },
        hide: function (){
            this.message = "C'est visible";
            this.voir = true;
        },
        ShowHide: function (){
            this.variable = true
        }
    }
});

//Liste avec boucle for:
//Instance de vue
new Vue({
    el:"#list-for",
    data:{
        listes:[
            {texte: "VueJs c cool"},
            {texte: "Ici la boucle for"},
            {texte: "Pour lister des elements texte"},
        ]
    }
});

//Un input reactif
new Vue({
    el:"#input",
    data:{
        message: 'Input reactif'
    }
})

//Methods vs Computed
new Vue({
    el:"#metCom",
    data:{
        success: false,
        message: ""
    },
    methods:{
        test: function (){
            console.log('test est appelé')
            return  this.success === true ? 'Ok' : 'Erreur'
        }
    }

    /* Modifier HTML supprimer parentese a test = <span class="green-text" :class="test">TEST Methods Vs Computed</span>
     computed:{
        test: function (){
            console.log('test est appelé')
            return  this.success === true ? 'Ok' : 'Erreur'
        }
    }
    met les valeur en cache seul la checkbox est modifiée
    on peux creer des getter et setters get: et set: function(value)
     */
})


