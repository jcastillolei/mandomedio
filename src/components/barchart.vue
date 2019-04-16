<template>
<div>
  <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>

export default {
    name: "BarChart",
    data: function() {
      return {
        series: [{
          name: 'Autoevaluacion',
          data: [44, 55, 57, 56]
        }, {
          name: 'Descendente',
          data: [76, 85, 100, 98]
        }, {
          name: 'Total',
          data: [35, 41, 36, 26]
        }],
        chartOptions: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '40%',
              endingShape: 'rounded'  
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 5,
            colors: ['transparent']
          },

          xaxis: {
            categories: ['Liderazgo', 'Autonomía', 'Empatía', 'Resiliencia'],
          },
          yaxis: {
            title: {
              text: 'Porcentaje'
            }
          },
          fill: {
            opacity: 10

          },
          toolbar: {
            theme: 'dark',
          },
          tooltip: {
            theme: 'dark',
            y: {
              formatter: function (val) {
                return val + " %"
              }
            }
          }
        }
      }
    }
}
</script>
