
//Formulaire
let vm = new Vue({
    //Div id html
    el: "#form",
    //Init des variable
    data: {
        prenom: '',
        nom: '',
        description: '',
        sexe: '',
        interet: '',
        destinataire: '',
        dateNaissance: '',
        photo: '',
        humeur: 75,
        emojis: ['😀', '😃', '😄', '😁', '😆', '😅', '😂']
    },
    computed:{
        getEmoji(){
            let index = Math.floor(this.humeur / 10) - 1;
            if(index === -1) index = 0;
            return this.emojis[index]
        }
    },
    methods:{
        changerPhoto(event){
            if(event.target.files.length === 0){
                return;
            }
            let fichier = event.target.files[0];
            let reader = new FileReader();

            //getion evenement
            reader.onload(e =>{
                this.photo = e.target.result
            });

            //lecture fichier
            reader.readAsDataURL(fichier);

            this.photo = event.target.files[0];

        },
        supprimerPhoto(){
            this.photo = '';
        }
    },
    //creation du template
    template: `
      <div class="form-contact">
      <h4 class="green-text lighten-1 center">Prise de contact</h4>
      <div class="row">
        <form class="col s12">
          <div class="row">
            
            <div class="input-field col s6">
              <input placeholder="Nom" v-model="nom" id="nom" type="text" class="validate">
            </div>
            
            <div class="input-field col s6">
              <input placeholder="prenom" v-model="prenom" type="text" class="validate">
            </div>

            <textarea
                v-model="description"
                placeholder="Votre demande"
                rows="5"
                cols="50"
                class="materialize-textarea">
            </textarea>

            <label>
              <input v-model="sexe" value="M" type="radio" checked />
              <span>Homme</span>
            </label>

            <label>
              <input v-model="sexe" value="F" type="radio" checked />
              <span>Femme</span>
            </label>

            <label>
              <input v-model="sexe" value="A" type="radio" checked />
              <span>Autre</span>
            </label>

            <h5 class="blue-grey-text">Centre d'interet</h5>
            <label>
              <input v-model="interet" value="sport" type="radio" checked />
              <span>Sport</span>
            </label>

            <label>
              <input v-model="interet" value="environment" type="radio" checked />
              <span>Environment</span>
            </label>

            <label>
              <input v-model="interet" value="science" type="radio" checked />
              <span>Science</span>
            </label>

            <label>
              <input v-model="interet" value="tecnologie" type="radio" checked />
              <span>Technologie</span>
            </label>
            <hr>
            <h5 class="blue-grey-text">Destinataire</h5>
            <label>Selectionner le destinataire</label>
            <select class="browser-default" id="destinataire" v-model="destinataire">
              <option value="" disabled selected>Destinataire</option>
              <option value="direction">Direction</option>
              <option value="commercial">Equipe commercial</option>
              <option value="support">Support technique</option>
            </select>
            
            <label>
              Date de naissance : 
              <input type="date" v-model="dateNaissance" class="datepicker">
            </label>

            <div class="file-field input-field">
              <div class="btn">
                <span>Fichier</span>
                <template v-if="photo.length > 0">
                  <img :src="photo" width="70px" height="90px">
                  <button @click="supprimerPhoto">Annuler</button>
                </template>
                <input v-else type="file" @change="changerPhoto">
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
            
            <label>
              Satisfaction
              <input v-model="humeur" min="0" max="100" />
              <span style="font-size: 30px">{{ getEmoji }}</span>
            </label>
            
          </div>
        </form>
      </div>
      </div>
    `
});

