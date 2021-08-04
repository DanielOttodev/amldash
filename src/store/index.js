import  Vue from 'vue'
import  Vuex  from 'vuex';

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
     
      msalConfig: {
        auth: {
          clientId: 'bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e',
          authority:
            'https://login.microsoftonline.com/0346c3b8-bdbe-414d-b295-9027af7ef797',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken: ''
    
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;