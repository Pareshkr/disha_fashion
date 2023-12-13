import value from 'assets/scss/_themes-vars.scss';
// eslint-disable-next-line
export default {
  height: 305,
  type: 'donut',
  options: {
    dataLabels: {
      enabled: false
    },
    labels: ['>80%', '50-80%', '<50%'],
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'inherit',
      labels: {
        colors: 'inherit'
      }
    },
    itemMargin: {
      horizontal: 10,
      vertical: 10
    },
    colors: [value.primary, value.info, value.error]
  },
  series: [1258, 975, 500]
};
