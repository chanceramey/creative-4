<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader';
 import Footer from './components/Footer';
 export default {
   name: 'App',
   components: { AppHeader, Footer }
 }
</script>

<style>
body {
    font-size: 16px;
    padding: 20px 100px 0px 100px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #222;
}

a {
  text-decoration: none;
}
</style>

