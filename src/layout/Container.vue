<template>

  <v-app id="inspire">
   
    
       <Navbar/>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>otto_281@hotmail.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="goTo(path)"
          v-for="[icon, text, path] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item >

        <v-list-item @click="signOff()" link>
          <v-list-item-icon>
            <v-icon>mdi-arrow-top-left-thin-circle-outline</v-icon>
           </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item-content>
         
        </v-list-item>
        <v-btn @click="test()"/>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
 
  <router-view/>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './navbar.vue';

export default {
  name: 'Container',
  components: {
    Navbar
  },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'List','/dashboard'],
        ['mdi-send', 'Calendar','/calendar'],
        ['mdi-delete', 'BooksAPI', '/books'],
        ['mdi-alert-octagon', 'Unknown', '/'],
      ],
    }),
    methods:{
      goTo(path){
        this.$router.push(path)
      },
      test(){
        console.log(localStorage.getItem('msal.bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e.idtoken'));
      },
      signOff(){
           localStorage.clear();
           this.$msal.signOut();
           console.log('Signed Off!')
          // this.$router.push('/login');
           
      }

    }
  }
</script>