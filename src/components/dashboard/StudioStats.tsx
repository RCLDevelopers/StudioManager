import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { PhotoCamera, People, AttachMoney } from '@mui/icons-material';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, color }) => (
  <Card sx={{ minWidth: 200 }}>
    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
      <Box
        sx={{
          backgroundColor: color,
          borderRadius: 2,
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
          {change}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const StudioStats: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: 'wrap' }}>
      <StatCard
        icon={<PhotoCamera sx={{ color: 'white' }} />}
        title="Studio Bookings"
        value="45"
        change="+12% last month"
        color="#2ed573"
      />
      <StatCard
        icon={<People sx={{ color: 'white' }} />}
        title="Active Clients"
        value="128"
        change="+8% last month"
        color="#70a1ff"
      />
      <StatCard
        icon={<AttachMoney sx={{ color: 'white' }} />}
        title="Revenue"
        value="$8,450"
        change="+15% last month"
        color="#ff6b81"
      />
    </Box>
  );
};

export default StudioStats; 