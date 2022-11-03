<template>
    <div class="home">
        <h2>Bienvenue sur l'interface de gestion des utilisateurs</h2>
        <img src="@/assets/img/banner.jpg" alt="Image-banner">
    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style>
.home {
    height: 80vh;
    padding: 2rem;
}
h2 {
    max-width: 60%;
}
img {
    margin: 5%;
    max-width: 90%;
}
</style>