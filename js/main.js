/* CONSEGNA
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

BONUS
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const{createApp} = Vue
createApp({
    data(){
        return {
            message:'Hello World!',
            imageSrc:'img/clay-banks-8q6e5hu3Ilc-unsplash.jpg',
            imageDescription:'image from Clay Banks (unsplash)',
            isHidden: true,
            HideShowDecl:'SHOW'
        }
    },
    methods: {
        toggleHello() {
            this.isHidden = !this.isHidden;

            if (this.isHidden === true) {
                this.HideShowDecl = 'SHOW';
            } else {
                this.HideShowDecl = 'HIDE';
            }
        }
    },
    mounted() {
        console.log("ho caricato l'app");
    }
}).mount("#app")
