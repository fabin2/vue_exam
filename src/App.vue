<template>

  <header class="header">
    <img src="@/assets/img/logo-Id-Formation.png" alt="Image-logo-id-formation">   <!-- <img src="@/assets/...  -->
    <nav>
      <router-link to="/">Accueil</router-link>                                    <!-- router-link -->
      <router-link to="/Utilisateurs">Utilisateurs</router-link>
      <router-link to="/Ajouter">Ajouter</router-link>
    </nav>
  </header>

  <main class="main">
    <router-view/>                                                                  <!-- router-view -->
  </main>

  <footer class="footer">
    <Footer></Footer>
  </footer>

</template>

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