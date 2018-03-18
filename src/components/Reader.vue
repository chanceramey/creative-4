<template>
  <div id="reader">
    <div class="reader">
      <div class="line" id="book">{{current_phrase}}</div>
    </div>
    <div class="controls">
      <div class="button control-item" v-if="!show_play" v-on:click="pause()" v-model="paused">Pause</div>
      <div class="button control-item" v-if="show_play" v-on:click="play()">Play</div>
      <div class="button control-item" v-if="reader" v-on:click="stop()">Stop</div>
      <!--<input class="control-item" type="number" min="60" max="200" step="5" v-model="speed" />
      <input class="control-item" type="number" min="1" max="5" step="1" v-on:change="lengthChanged()" v-model="length" />-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reader',
  data: function () {
    return {
      title: '20,000 Leagues Under the Sea',
      previous_phrase: '',
      current_phrase: '20,000 Leagues Under the Sea',
      next_phrase: '',
      speed: 200,
      length: 1,
      reader: null,
      place: 0,
      paused: true,
      index: 0
     }
  },
  created: function() {
      this.$store.dispatch('getBook');
    },
  computed: {
    book: function() {
      return this.$store.getters.book;
    },
    loaded: function() {
      return this.book.length
    },
    show_play: function(){
      return (this.paused);
    },
    show_pause: function(){
      return (!this.paused);
    },
  },
  methods: {
    read: function() {
       this.reader = window.setInterval(() => {
         this.cycle();
         this.place++;
         if (this.place === this.book.length) window.clearInterval(this.reader);
       }, (60/this.speed*this.length)*1000);
    },
    cycle: function() {
      let temp_phrase = '';
      for (let i = 0; i < this.length; i++) {
        temp_phrase = temp_phrase.concat(this.book[this.place*this.length+i]);
        temp_phrase = temp_phrase.concat(' ')
      }
      this.current_phrase = temp_phrase;
    },
    pause: function() {
      this.paused = true;
      window.clearInterval(this.reader);
    },
    play: function() {
      this.paused = false;
        this.reader = window.setInterval(() => {
          this.cycle();
          this.place++;
          if (this.place === this.book.length) window.clearInterval(this.reader);
        }, (60/this.speed)*1000);
    },
    stop: function() {
      this.restart();
    },
    restart: function () {
      this.place = 0;
      this.reader && window.clearInterval(this.reader);
      this.current_phrase = '20,000 Leagues Under the Sea';
      this.next_phrase = '';
      this.previous_phrase = '';
      this.paused = true;

    },
    lengthChanged: function() {
      this.place--;
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
.controls {
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
}
.control-item {
  margin: 20px; 
  color: #aaa;
}
.reader {
  display: block;
  flex-direction: vertical;
  justify-content: center;
  align-item: center;
  height: 300px;
  width: 80%;
  font-size: 48px;
  color: #fff;
  margin: auto;
  text-align: center;
  padding-top: 150px;
}
.line {
  margin: 10px;
  height: 50px;
}

</style>