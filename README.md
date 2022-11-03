# vue_final

## Rewrited

src folder/assets/css -> style.css  ✅
src folder/assets/img -> images     ✅

src folder -> App.vue

src folder/views -> AccueilView.vue     ✅
src folder/views -> AjouterView.vue     ✅
src folder/views -> ModifierView.vue
src folder/views -> UtilisateursView.vue


src folder/components -> Footer.vue     ✅
src folder/components -> Modal.vue      ✅

src folder/mixins -> createObjectFromTextarea.js    ✅

src folder/router -> index.js   ✅

src folder/store -> index.js    ✅

## App.vue
```js
<template>
    <nav>
      <router-link to="/">Accueil</router-link>                                    <!-- router-link -->
    </nav>

    <main>
    <router-view/>                                                                  <!-- router-view -->
  </main>

  <footer>
    <Footer></Footer>
  </footer>

  <script>
import Footer from "@/components/Footer.vue"
export default {
  name: 'App',
  components: {
    Footer,
  },
  data: function(){
    return {
      database: [],
    }
  },
  beforeMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
      this.database = json;
      for(const user of this.database) {
        delete user.address.geo;
        delete user.address.suite;
      }
      this.$store.commit("UPDATE_DATABASE", this.database);
      this.$store.commit("CREATE_FROM_STRUCTURE", this.database[0]);
      // console.log(this.$store.state.database)
      console.log(this.$store.state.objectStructure);
      }
  )},
}
</script>

<style>
  @import '@/assets/css/style.css';
</style>
```