import React from 'react';
import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import StudioStats from './StudioStats';
import BookingChart from './BookingChart';
import RecentBookings from './RecentBookings';
import StudioUsage from './StudioUsage';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12}>
          <StudioStats />
        </Grid>
        <Grid item xs={12} lg={isSmallScreen ? 12 : 8}>
          <BookingChart />
        </Grid>
        <Grid item xs={12} lg={isSmallScreen ? 12 : 4}>
          <StudioUsage />
        </Grid>
        <Grid item xs={12}>
          <RecentBookings />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;