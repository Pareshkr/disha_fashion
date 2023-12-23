import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography } from '@mui/material';

// project import
// import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';
import { drawerWidth } from 'config.js';

// assets
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from 'react-router-dom';
// import { TopNavItems } from 'top-nav-items';
// import topNavItems from 'top-nav-items';
// import logo from 'assets/images/logo.svg';
// import NeophyteLogo from "assets/images/neophyte_logo.png"

// ==============================|| HEADER ||============================== //

const Header = ({ drawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      <Box width={drawerWidth}>
        <div className="flex">
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Grid item>
              <Box mt={0.5}>
                <Typography variant="h2" align="left" className="black" sx={{ width: '100%', paddingLeft: 1.6 }}>
                  Disha
                </Typography>
                {/* <img className='w-[80%]' src={NeophyteLogo} alt="Logo" /> */}
              </Box>
            </Grid>
          </Box>
          <Grid item>
            <IconButton
              className="text-white/10"
              edge="start"
              sx={{ mr: theme.spacing(1.25), color: 'white' }}
              // color="inherit"
              aria-label="open drawer"
              onClick={drawerToggle}
              size="large"
            >
              <MenuTwoToneIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Grid>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1,  }}>
        <Box className="space-x-8" sx={{flexGrow: 1, display: { xs: 'none', md: 'block' }}}>
          <Link
            to={'/dashboard/default'}
            className="text-lg border-b-2 border-emerald-500 text-emerald-600 hover:border-b-2 hover:border-emerald-500 hover:text-emerald-600"
          >
            Insights
          </Link>
          <Link
            to={'/dashboard/default'}
            className="text-lg border-b-2 border-white hover:border-b-2 hover:border-emerald-500 hover:text-emerald-600"
          >
            Stores
          </Link>
          <Link
            to={'/dashboard/default'}
            className="text-lg border-b-2 border-white hover:border-b-2 hover:border-emerald-500 hover:text-emerald-600"
          >
            Brand
          </Link>
          <Link
            to={'/dashboard/default'}
            className="text-lg border-b-2 border-white hover:border-b-2 hover:border-emerald-500 hover:text-emerald-600"
          >
            Customers
          </Link>
          <Link
            to={'/dashboard/default'}
            className="text-lg border-b-2 border-white hover:border-b-2 hover:border-emerald-500 hover:text-emerald-600"
          >
            Team
          </Link>

          {/* {TopNavItems.map((item) => {
            <Link className='' key={item.title} to={item.url}>
              {item.title}
            </Link>;
          })} */}
        </Box>
      </Box>
      {/* <SearchSection theme="light" /> */}
      {/* <NotificationSection /> */}
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  drawerToggle: PropTypes.func
};

export default Header;
