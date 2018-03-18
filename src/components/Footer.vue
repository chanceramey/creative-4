<template>
  <nav>
    <ul class="footer-menu">
      <li><a href="https://github.com/chanceramey/creative-4" target="_blank">Find this on Github</a></li>
      <div class="subscription">
      <input id="email-address" type="email" v-model="email" placeholder="Email Address"/>
      <button class="send-email" v-on:click="subscribe()" v-if="!currentEmail">Subscribe</button>
      <button class="send-email" v-on:click="update()" v-if="currentEmail">Update Email</button>
      <button class="send-email delete" v-on:click="unsubscribe()" v-if="currentEmail">Unsubscribe</button>
      <div id="current-email" v-if="currentEmail">Current Email: {{currentEmail}}</div>
      </div>
    </ul>	
  </nav>
</template>

<script>
 export default {
   name: 'Footer',
   data: function () {
       return {
           email: '',
       }
   },
   computed: {
       currentEmail: function () {
           return this.$store.getters.user;
       }
   },
   methods: {
       subscribe: function() {
           this.$store.dispatch('subscribe', {email: this.email});
       },
       unsubscribe: function() {
           this.$store.dispatch('unsubscribe');
       },
       update: function() {
            this.$store.dispatch('update', {email: this.email});
       }
   }
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .footer-menu {
 }

 .footer-menu a {
 }

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
     color: #666;
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
 }

 #email-address {
     padding: 10px;
     border: none;
     border-radius: 5px;
 }
 .send-email {
     padding: 10px;
     border: none;
     border-radius: 5px;
     color: #fff;
     border: none;
     background-color: #0011ff;
 }

 .send-email:focus {
     outline: none;
 }

  .send-email:hover {
     color: #aaa;
 }

  .subscription {
    display:inline-block;
    float: right;
    text-align: right;
  }

  .delete {
      color: #fff;
      background-color: red;
      border: none;
  }

  #current-email {
      padding: 10px;
      color: #aaa;
  }
</style>