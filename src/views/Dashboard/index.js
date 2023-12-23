import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress } from '@mui/material';

//project import
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';
import statisticsChartsData from 'data/statistics-charts-data';

import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

// assets
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
// import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
// import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
// import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
// import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
// import CenterFocusStrongTwoToneIcon from '@mui/icons-material/CenterFocusStrongTwoTone';
// import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
// import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
// import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
// import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';

// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Default = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sx={{ mb: -1, mt: -2 }}>
        <Typography variant="h3">Insights</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              // primary="93%"
              // secondary="Shelf-fullness"
              // color={theme.palette.success.main}
              // footerData="5% increase"
              // iconPrimary={BusinessTwoToneIcon}
              // iconFooter={TrendingUpIcon}
              chart={statisticsChartsData[1].chart}
              title="Average Shelf Up-keep"
              count="86%"
              percentage={0.5}
              chipColor="success"
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              // primary="74%"
              // secondary="Color Assort."
              // color={theme.palette.warning.main}
              // footerData="7% increase"
              // iconPrimary={ColorLensTwoToneIcon}
              // iconFooter={TrendingUpIcon}
              chart={statisticsChartsData[2].chart}
              title="Visual Merchandising Compliance"
              count="78%"
              percentage={2}
              chipColor="warning"
              color={theme.palette.warning.main}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              // primary="45%"
              // secondary="Category Assort."
              // color={theme.palette.error.main}
              // footerData="3% decrease"
              // iconPrimary={CategoryTwoToneIcon}
              // iconFooter={TrendingDownIcon}
              chart={statisticsChartsData[3].chart}
              title="Discounts & promos execution"
              count="68%"
              percentage={0.5}
              isLoss
              chipColor="error"
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              // primary="67%"
              // secondary="Brands"
              // color={theme.palette.warning.main}
              // footerData="10% increase"
              // iconPrimary={LocalOfferTwoToneIcon}
              // iconFooter={TrendingUpIcon}
              chart={statisticsChartsData[4].chart}
              title="Anomalies Found"
              count="27"
              percentage={0.5}
              isLoss
              chipColor="warning"
              color={theme.palette.warning.main}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <SalesLineCard
                      chartData={SalesLineCardData}
                      title="Name to be set"
                      percentage="3%"
                      icon={<TrendingDownIcon />}
                      // footerData={[
                      //   {
                      //     value: '$4230',
                      //     label: 'Total Revenue'
                      //   },
                      //   {
                      //     value: '321',
                      //     label: 'Today Sales'
                      //   }
                      // ]}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ display: { md: 'block', sm: 'none' } }}>
                    <Card>
                      <CardContent sx={{ p: '0 !important' }}>
                        <Grid container alignItems="center" spacing={0}>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  FILLED{' '}
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                                  14
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  EMPTY
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="right">
                                  3
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RevenuChartCard chartData={RevenuChartCardData} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Capture Progress
                  </Typography>
                }
              />
              <Divider />
              <CardContent className="overflow-y-auto scrollbar h-[320px]">
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">TU30-Lucknow Jankipuram-Lucknow</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          80%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="direct" value={80} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">1:00 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">8041-Jamshedpr Bombay Twr-Jamshedpur</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          50%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Social" value={50} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">12:48 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">TK56-Luknow Ring Road-Lucknow</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          20%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Referral" value={20} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">12:37 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">T827-Pratapgar BeladeviRd-Pratapgarh</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          60%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Bounce" value={60} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">12:25 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">TO09-Faizabad Civil Lines-Faizabad</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">12:19 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">8136-Kolkata Axis Mall-Kolkata</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">12:13 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">TX73-Kolkata Dum Dum Rd-Kolkata</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">12:06 PM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">8114-Coimbator Brokefield-Coimbatore</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">11:50 AM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">1882-Jorhat City Centre-Jorhat</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">10:36 AM</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
