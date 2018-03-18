import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: [],
    user: ''
  },
  getters: {
    book: (state) => {
      return state.book;
    },
    user: (state) => {
      return state.user;
    }
  },
  mutations: {
    setBook: (state, file) => {
        const thisbook = file.split(RegExp(/[ \t\r\n]+/g));
        state.book = thisbook;
      },
      setSubscribed: (state, response) => {
        state.user = response.data.email;       
    }
  },
  actions: {
    getBook(context) {
        axios.get("/api/book").then(response => {
        context.commit('setBook', response.data);
      return true;
        }).catch(err => {
        });
      },
    subscribe(context, email) {
        axios.post("/api/subscribe", email).then(response => {
        context.commit('setSubscribed', response);
      }).catch(err => {
      });
      },
    update(context, email) {
        axios.put("/api/update", email).then(response => {
          context.commit('setSubscribed', response);
      }).catch(err => {
      });
      },
    unsubscribe(context) {
        axios.delete("/api/unsubscribe").then(response => {
          this.state.book = [];
          context.commit('setSubscribed', response);
      }).catch(err => {
    });
      }
  }
});