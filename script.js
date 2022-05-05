const Nav = {
  template: `
    <div class ="main-nav">
        <h1>NETPRIME+</h1>
        <h2>La Platforme Video Complement Originale</h2>
        <button id="traduction">Traduction</button>

    </div>
    <div class = "table1">
    <h3>Nos formules d'Abonnement</h3>
    <P> Toutes nos formules d'abonnement sont 100% sans 
    engagement et résiliables à  tous moments. Paiement par 
    CB, Paypal et  Bitcon possible.
    </div>
    `,
};
const Header = {
  template: `
    <div class ="main-header">
        <h1>DECOUVREZ TRES BIENTOT NOS OFFRES</h1>
        <p>A PARTIR DE 9,99 € / MOIS</p>
        <button>EN SAVOIR PLUS</button>
    </div>
    `,
};
const Blog = {
  props: {
    titre: String,
    prix: Number,
  },
  template: `
    <article>
    <h1>{{titre}}{{prix}}</h1>
    <slot></slot>
    
    </article>
    `,
};
const Child = {
  template: `
      <footer class ="main-child">
          <h1>NETPRIME+</h1>
          <p class = "copy">&copy Tous Droits Reservés
      </footer>
      `,
};
const Component = {
  components: {
    Nav,
    Header,
    Blog,
    Child,
  },

  template: `
  <div>
    <Nav/>
    <Header/>
    <br>
    <br>
    <div class= "produit">
        <blog class = "blog">
            <h1>SOLO</h1>
            <p> 1 Ecran video HD</p>
            <p> 9,99 € /mois</p>
            <button>S'ABONNER</button>
        </blog>
        <blog class = "blog">
            <h1>FAMILY</h1>
            <p> 1 Ecran video HD</p>
            <p> 12,99 € /mois</p>
            <button>S'ABONNER</button>
        </blog>
        <blog class="blog">
            <h1>FAMILY 4K</h1>
            <p> 1 Ecran video HD</p>
            <p> 15,99 € /mois</p>
            <button>S'ABONNER</button>
        </blog>
    </div>
    <Child/>
  </div>

  `,
};
Vue.createApp(Component).mount("#root");
