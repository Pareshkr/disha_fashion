const chartData = {
  type: 'bar',
  height: 255,
  options: {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      }
    },
    // colors:['#ff3322','#faf']
    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000'
      },
      theme: 'dark',
      onDatasetHover: {
        style: {
          fontSize: '12px',
          fontFamily: undefined
        }
      }
    },
    xaxis: {
      categories: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
      show: false,
      labels: {
        show: true,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      color: 'black',
      labels: {
        show: false,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500'
        }
      }
    },

    grid: {
      borderColor: 'rgba(163, 174, 208, 0.3)',
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5
        }
      },
      row: {
        opacity: 0.5
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    fill: {
      type: 'solid',
      colors: [
        '#5E37FF',
        '#6AD2FF'
        // "#E1E9F8"
      ]
    },
    legend: {
      show: false
    },
    colors: [
      '#5E37FF',
      '#6AD2FF'
      // "#E1E9F8"
    ],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '20%'
      }
    }
  },
  series: [
    {
      name: 'PRODUCT A',
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: '#10b981'
    },
    {
      name: 'PRODUCT B',
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: '#ef4444'
    }
  ]
};

export default chartData;
