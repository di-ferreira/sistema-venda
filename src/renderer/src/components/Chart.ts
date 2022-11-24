import ApexCharts from 'apexcharts'

const colors: string[] = ['#999', '#F44336', '#E91E63', '#990933', '#9C27B0']

const options = {
  chart: {
    type: 'bar',
    height: 350
  },
  series: [
    {
      data: [50, 73, 65, 90, 110]
    }
  ],
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['Hamburguer', 'Hot-dog', 'X-Calabresa', 'X-Tudo', 'Açaí'],
    labels: {
      style: {
        colors: colors,
        fontSize: '12px'
      }
    }
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (): string => {
          return ''
        }
      }
    }
  }
}

const CreateChart = (selector: string, opt = options): Promise<void> => {
  const chart = new ApexCharts(document.querySelector(selector), opt)
  return chart.render()
}

export default CreateChart
