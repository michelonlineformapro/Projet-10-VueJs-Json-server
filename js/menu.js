//Effet de slide
$(document).ready(function(){
    $('.sidenav').sidenav();
});


//Composant menu
//Instance de vue + creation d'un composant qu s'appelle menu-nav <menu-nav></menu-nav> ou auto fermant <menu-nav />

Vue.component('menu-nav',{
    props: ['todo'],
    template: '<li><a :href="todo.url">{{ todo.text }}</a></li>'
});

new Vue({
    el:"#menu",
    data:{
        menuList:[
            {id: 0, text: 'accueil', url: 'index.html'},
            {id: 1, text: 'recette', url: 'recette.html'},
            {id: 2, text: 'test',url: 'test.html' },
            {id: 3, text: 'API',url: 'api.html' },
        ]
    }
});