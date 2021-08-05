<script>
import {Bar} from 'vue-chartjs'

export default {
    
    extends: Bar,
    props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  }, // not actually in use
    name:'Chart1',
    mounted() {

    this.renderChart(this.chartdata, this.options)
  }  
}
</script>