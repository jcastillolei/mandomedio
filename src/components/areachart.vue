<template>
<div>
  <apexchart width="500" type="area" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>

export default {
    name: "AreaChart",
    data: function() {
      return {
        series: [{
          name: "Autoevaluacion",
          data: [3, 4, 5, 2]
        }, {
          name: "Descedente",
          data: [2, 3, 3, 1]
        }],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },


          xaxis: {
            type: 'category',
            categories: ["Liderazgo", "Autonomía", "Empatía", "Resiliencia"],
          },
          tooltip: {
            theme: 'dark',
            x: {
              format: ''
            },

          }
        }
      }
    } 
}
</script>
