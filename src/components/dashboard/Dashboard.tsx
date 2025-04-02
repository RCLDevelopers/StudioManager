import React from 'react';
import { Grid } from '@mui/material';
import StudioStats from './StudioStats';
import BookingChart from './BookingChart';
import RecentBookings from './RecentBookings';
import StudioUsage from './StudioUsage';

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StudioStats />
      </Grid>
      <Grid item xs={12} lg={8}>
        <BookingChart />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StudioUsage />
      </Grid>
      <Grid item xs={12}>
        <RecentBookings />
      </Grid>
    </Grid>
  );
};

export default Dashboard; 