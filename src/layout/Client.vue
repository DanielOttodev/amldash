<template>
<v-container>
    <v-row>
        <h1>{{clientNumber}}</h1>
    </v-row>
</v-container>
</template>

<script>

export default {
    name:'Client',
    props:{
        clientNumber: String
    },
    data: () => {
    return{
       
    }},

    mounted(){
    let data = this.$route.params.id;
    this.clientNumber = data;
    }
}
</script>