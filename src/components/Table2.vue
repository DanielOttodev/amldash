<template>
  <v-data-table
    :headers="alertHeaders"
    :items="alerts"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    
    item-key="Amount"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
  
      <v-toolbar flat>
        <v-toolbar-title>Total Alerts</v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length">
       <h3> Account: {{accountName}}</h3>
       <v-list>
      <li>
        Total: 
        {{ tranTotal }}
        <TransTable v-if="transList" :TranTable="transList"> </TransTable>
        </li>
       </v-list>
      </td>
    </template>
  </v-data-table>
</template>
<script>
import TransTable from '../components/TransTable.vue'
  export default {
    props:['alertdata'],
    components:{
      TransTable
    },
    data () {
      return {
        expanded: [],
        singleExpand: false,
        alertHeaders: [
          {
            text: 'Rule Number',
            align: 'start',
            sortable: false,
            value: 'RuleNumber',
          },
          
          { text: 'Date', value: 'DateCreated' },
          { text: 'Amount', value: 'Amount' },

        ],
        alerts: this.alertdata,
        transactions : this.alertdata.detail,     
      }
    },
    computed: {
        accountName : function() { 
 
        return this.alertdata[0].Detail.split('#',1)[0]
        } ,
        tranTotal: function(){ return this.alertdata[0].Detail.split('#',3)[1]},
        transList: function(){
          let list = this.alertdata[0].Detail.split("#")[2]
          list =  list.replace(")","")
          list = list.trim()
          let allTrans = list.split("}")
          allTrans.shift();
          console.log(allTrans);
          let allTxn = [];
            for( var x = 0; x < allTrans.length ; x++){
          
            let splitarr =  allTrans[x].split("|")
            
         
              console.log("splitarr:"+splitarr[0])
              let myobj = {
                
                amount: splitarr[0],
                transDate : splitarr[1],
                transId : splitarr[2]
              }
              allTxn.push(myobj);
            }
          console.log(allTxn);
          return allTxn;          
        }   
    },
  }
  
</script>