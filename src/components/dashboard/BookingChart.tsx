import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
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
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        height: '100%',
        boxShadow: theme.shadows[2],
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Studio Bookings Trend
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                bgcolor: '#2ed573',
                boxShadow: '0 2px 6px #2ed57340'
              }} 
            />
            <Typography variant="body2" color="text.secondary">
              Photo Sessions
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                bgcolor: '#70a1ff',
                boxShadow: '0 2px 6px #70a1ff40'
              }} 
            />
            <Typography variant="body2" color="text.secondary">
              Video Sessions
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: { xs: 300, md: 360 } }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
              <XAxis 
                dataKey="month" 
                stroke={theme.palette.text.secondary}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: theme.palette.divider }}
              />
              <YAxis 
                stroke={theme.palette.text.secondary}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: theme.palette.divider }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 8,
                  boxShadow: theme.shadows[3],
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="photoSessions"
                stroke="#2ed573"
                strokeWidth={2}
                dot={{ stroke: '#2ed573', strokeWidth: 2, r: 4, fill: '#fff' }}
                activeDot={{ r: 6, stroke: '#2ed573', strokeWidth: 2, fill: '#fff' }}
                name="Photo Sessions"
              />
              <Line
                type="monotone"
                dataKey="videoSessions"
                stroke="#70a1ff"
                strokeWidth={2}
                dot={{ stroke: '#70a1ff', strokeWidth: 2, r: 4, fill: '#fff' }}
                activeDot={{ r: 6, stroke: '#70a1ff', strokeWidth: 2, fill: '#fff' }}
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