<template>
  <div id="Login">
    <input placeholder="Username" v-model="username" />
    <input placeholder="Password" v-model="password" />
    <button v-on:click="register()">Register</button>
    <button v-on:click="login()">Login</button>

  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
      register: function() {
        this.$store.dispatch('register', { username: this.username, password: this.password });
      },
      login: function() {
        this.$store.dispatch('login', { username: this.username, password: this.password });
      }
  },
  data: function() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>
body {
    font-size: 16px;
    padding: 20px 100px 0px 100px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>