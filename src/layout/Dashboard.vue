<template>
<div>
<Table>
</Table>
<v-container> 
    <v-row>
        <v-col>
            <div class="chart1"> 
            <Chart1 :chartdata="this.chartdata" :options="this.options"></Chart1>
            </div>
        </v-col>
<v-col>
<div class="chart1">
<ChartLine :chartdata="this.chartLineData"></ChartLine>
</div>
</v-col>
    </v-row>

</v-container>


</div>
</template>

<script>

import Table from '../components/Table.vue'
import Chart1 from '../components/Chart1.vue'
import ChartLine from '../components/ChartLine.vue'



export default {
    
    name:'Dashboard',
    components: {
        Table,
        Chart1,
        ChartLine
        
    }
    ,data: () => {
  return{
        chartdata : {
        labels: ['2', '3', '4', '5', '6','7','8','9','10'],
        datasets: [{
            label: '# of Alerts per Rule',
            data: [174,343,2065,179,5114,656,2651,650,658],
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
        }, 
       options : {
        responsive:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    
    chartLineData : {
    labels : ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
    datasets:[{
        label: 'Alerts Per Year - Rule 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1}]

        }
}}}

</script>
<style>
.chart1{
    height:400px;
    width: 400px;
}
</style>