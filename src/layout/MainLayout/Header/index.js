import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, IconButton } from '@mui/material';

// project import
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';
import { drawerWidth } from 'config.js';

// assets
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
// import logo from 'assets/images/logo.svg';
import NeophyteLogo from "assets/images/neophyte_logo.png"

// ==============================|| HEADER ||============================== //

const Header = ({ drawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      <Box width={drawerWidth}>
        <div className='flex'>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Grid item>
              <Box mt={1.5}>
                <img className='w-[80%]' src={NeophyteLogo} alt="Logo" />
              </Box>
            </Grid>
          </Box>
          <Grid item>
            <IconButton
              edge="start"
              sx={{ mr: theme.spacing(1.25), color: "white" }}
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
      <Box sx={{ flexGrow: 1 }} />
      <SearchSection theme="light" />
      {/* <NotificationSection /> */}
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  drawerToggle: PropTypes.func
};

export default Header;
