<template>
  <nav>
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/reader">Reader</router-link></li>
      <img src="https://png.icons8.com/ios/50/ffffff/xbox-r.png">
    </ul>	
  </nav>
</template>

<script>
 export default {
   name: 'AppHeader'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }
 nav {
     display: grid;
 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
 }

 /*Create a horizontal list with spacing*/
 li {
     display:inline-block;
     float: left;
     margin-right: 1px;
 }
 /*Style for menu links*/
 li a {
     display:block;
     margin-right: 20px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: #aaa;
 }

 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
     font-weight: lighter;
     color: #eee;
 }

 #menu img {
    float: right;
 }
</style>