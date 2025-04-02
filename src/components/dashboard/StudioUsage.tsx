import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Photo Sessions', value: 45, color: '#2ed573' },
  { name: 'Video Production', value: 30, color: '#70a1ff' },
  { name: 'Audio Recording', value: 15, color: '#ff6b81' },
  { name: 'Events', value: 10, color: '#ffa502' },
];

const StudioUsage: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Studio Usage
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                height={36}
                content={({ payload }) => (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                    {payload?.map((entry, index) => (
                      <Box key={`item-${index}`} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: entry.color,
                          }}
                        />
                        <Typography variant="body2">
                          {entry.value} - {data[index].value}%
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StudioUsage; 