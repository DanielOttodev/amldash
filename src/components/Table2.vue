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
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
       <p>{{accountName}}</p>
       <v-list>
      <li>
        {{ item.Detail }}
        </li>
       </v-list>
      </td>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    props:['alertdata'],
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
        console.log('computed:'+ this.alertdata[0].Detail.split('#',1)[0])// This.alerts is undefined?
        return this.alertdata[0].Detail.split('#',1)[0]
        }    
    },
  }
  
</script>