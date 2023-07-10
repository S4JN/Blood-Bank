import React from 'react';
import Header from './Header';
import { Box, Grid, ListItem, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import Siderbar from './Siderbar';

const Layout = ({ children }) => {
  const theme = createTheme(); // Create a MUI theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Use the theme in useMediaQuery

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className='header'>
          <Header />
        </div>

        <Grid container component="main" sx={{ height: '100vh' }}>
          {isMobile ? null : (
            <Grid item xs={false} sm={false} md={2.5}>
              <Siderbar />
            </Grid>
          )}
          <Grid item xs={12} sm={8} md={8}>
            <div className='content'>{children}</div>
          </Grid>
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default Layout;
