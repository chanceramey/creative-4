<template>
  <nav>
    <ul class="footer-menu">
      <li><a href="http://github.com" target="_blank">Find this on Github</a></li>
      <div class="subscription">
      <input id="email-address" type="email" v-model="email" v-if="!subscribed"/>
      <button id="send-email" v-on:click="subscribe()" v-if="!subscribed">Subscribe</button>
      <button id="send-email" v-on:click="unsubscribe()" v-if="subscribed">Unsubscribe</button>
      </div>
    </ul>	
  </nav>
</template>

<script>
 export default {
   name: 'Footer',
   data: function () {
       return {
           email: ''
       }
   },
   computed: {
       subscribed: function() {
            return this.$store.getters.email;
       }
   },
   methods: {
       subscribe: function() {
           this.$store.dispatch('subscribe', this.email);
       },
       unsubscribe: function() {
           this.$store.dispatch('unsubscribe', this.email);
       }
   }
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .footer-menu {
     max-width: 250px;
 }

 .footer-menu a {
     display:"block"
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
 #send-email {
     padding: 10px;
     border: none;
     border-radius: 5px;
 }
</style>