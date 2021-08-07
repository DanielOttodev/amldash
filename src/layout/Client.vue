<template>
    <v-container>
        <v-row>
            <v-col text-right>
                <v-btn class="ma-2  " color="blue-grey lighten-1" dark x-small @click="goBack()">
                    <v-icon dark left>
                        mdi-arrow-left
                    </v-icon>Back
                </v-btn>
                <div class="d-flex">
                    <h1>{{clientNumber}}</h1>
                    <v-chip pill class="ma-2" color="red" text-color="white">High</v-chip>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div v-if="alertData">
                    <Table2 :alertdata="alertData"> </Table2>
                </div>
            </v-col>
            <v-col>
                <Chart1 :chartdata="this.chartdata" :options="this.options" class="smallChart"></Chart1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Chart1 from '../components/Chart1.vue'
import Table2 from '../components/Table2.vue'

export default {
    name: 'Client',
    components: {
        Table2,
        Chart1
    },
    props: {
       

    },
    data: () => {
        return {
            clientNumber:'',
            alertData: null,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            chartdata: {
                labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
                datasets: [{
                    pointHoverBackgroundColor: "#1f8ef1",
                    label: '# of Alerts per Rule',
                    data: [174, 343, 2065, 179, 5114, 656, 2651, 650, 658],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(25, 150, 224, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(153, 102, 255, 0.2)'

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(25, 150, 224, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }
    },
    mounted() {
        let data = this.$route.params.id;
        this.clientNumber = data;

        fetch('https://pipetoapi.azurewebsites.net/api/dummyjson')
            .then(response => response.json())
            .then((mydata) => (this.alertData = mydata))
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }

}
</script>

<style scoped>
.smallChart{
    height:300px;
    width:300px;
}
</style>