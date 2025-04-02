import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', photoSessions: 20, videoSessions: 15 },
  { month: 'Feb', photoSessions: 35, videoSessions: 25 },
  { month: 'Mar', photoSessions: 30, videoSessions: 28 },
  { month: 'Apr', photoSessions: 40, videoSessions: 32 },
  { month: 'May', photoSessions: 45, videoSessions: 38 },
  { month: 'Jun', photoSessions: 42, videoSessions: 35 },
  { month: 'Jul', photoSessions: 48, videoSessions: 40 },
  { month: 'Aug', photoSessions: 50, videoSessions: 45 },
];

const BookingChart: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Studio Bookings Trend
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#2ed573' }} />
            <Typography variant="body2">Photo Sessions</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#70a1ff' }} />
            <Typography variant="body2">Video Sessions</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="photoSessions"
                stroke="#2ed573"
                activeDot={{ r: 8 }}
                name="Photo Sessions"
              />
              <Line
                type="monotone"
                dataKey="videoSessions"
                stroke="#70a1ff"
                activeDot={{ r: 8 }}
                name="Video Sessions"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookingChart; 