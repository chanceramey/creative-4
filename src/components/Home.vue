<template>
  <div id="home">
    <div class="booklist" v-for="book in books">
      <div class="card" v-on:click="navigate()">
      <img class="bookImg" src="../assets/20000.jpg"/>
      <div class="text">
      <div class="title">{{book.name}}</div>
      <div class="sub-title">{{book.author}}</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  methods: {

  },
  data: function() {
    return {
      books: [
        {
          name: "20000 Leagues Under the Sea",
          author: "Jules Verne",
          img: 'assets/logo.png',
          index: 0
        },
      ]
    }
  },
  methods: {
    navigate: function() {
      this.$router.push({
        path: '/reader'
      })
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
.bookImg {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.card {
  width: 200px;
  height: 300px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 50px;

}

.booklist {
  height: 450px;
}
.card .title {
  font-weight: bold;
}

.card .sub-title {
  color: #666;
}

.card .text {
  padding: 12px;
}
</style>