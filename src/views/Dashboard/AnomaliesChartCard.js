import PropTypes from 'prop-types';
import React from 'react';

// material-ui

// third-party
import Chart from 'react-apexcharts';

// ==============================|| ANOMALIES CHART CARD ||============================== //

const AnomaliesChartCard = ({ chartData }) => {
  //   const theme = useTheme();

  return <Chart {...chartData} />;
};

AnomaliesChartCard.propTypes = {
  chartData: PropTypes.object
};

export default AnomaliesChartCard;
