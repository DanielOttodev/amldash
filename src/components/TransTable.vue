<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in TranTable"
          :key="item.Amount"
        >
          <td>{{ item.amount }}</td>
          <td>{{ item.transDate }}</td>
          <td>{{ item.transId}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    name: "TranTable",
    props:['allTrans'],
    data: () => ({
        allTrans: this.TranTable
    })

  }
</script>