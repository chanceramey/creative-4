import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: ''
  },
  getters: {
    book: (state) => {
      return state.book;
    }
  },
  mutations: {
    setBook (state, file) {
        const thisbook = file.split(RegExp(/[ \t\r\n]+/g));
        this.state.book = thisbook;
      },
    setSubscribed (state, response) {

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
          return context.dispatch('setSubscribed', response);
      }).catch(err => {
      });
      },
    resetPassword(context, item) {
        axios.put("/reset" + item.id, item).then(response => {
      return true;
        }).catch(err => {
        });
      },
    unsubscribe(context) {
        axios.delete("/api/unsubscribe").then(response => {
      return context.dispatch('getItems');
        }).catch(err => {
        });
      }
  }
});