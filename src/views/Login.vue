<template>
<v-app>
  
<v-row align="center">
       <v-col
        cols="12"
        sm="4"
      >
            </v-col>
             <v-col

        cols="12"
        sm="4"
      >
    <v-card elevation="2" class="d-flex justify-center pa-6">
    <div align="center">
    <v-card-title primary-title>
        Welcome
    </v-card-title>
 
      

   
        <v-btn @click="checkauth()" align="center" color="primary"> Login</v-btn>
      </div>
   
    </v-card>
            </v-col>
             <v-col

        cols="12"
        sm="4"
      >
        

 
      </v-col>
</v-row>
</v-app>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    //
  }),
  methods:{
    checkauth(){
      let token = localStorage.getItem('msal.bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e.idtoken');
      console.log(this.$msal.isAuthenticated())
       if (token == '' || token == null) {
        this.$msal.signIn();
  
      }
    }
  }
};
</script>
