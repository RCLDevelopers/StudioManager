import React from 'react';
import { Box, Card, CardContent, Typography, Grid, useTheme } from '@mui/material';
import { PhotoCamera, People, AttachMoney } from '@mui/icons-material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, color }) => {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        height: '100%',
        boxShadow: theme.shadows[2],
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        }
      }}
    >
      <CardContent sx={{ 
        p: { xs: 1.5, sm: 2, md: 3 },
        '&:last-child': { pb: { xs: 1.5, sm: 2, md: 3 } }
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: { xs: 1, sm: 1.5, md: 2 },
          flexDirection: { xs: 'column', sm: 'row' },
          '@media (max-width: 350px)': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }
        }}>
          <Box
            sx={{
              backgroundColor: color,
              borderRadius: { xs: 1.5, sm: 2 },
              p: { xs: 1, sm: 1.5 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 12px ${color}40`,
              minWidth: { xs: '40px', sm: '48px' },
              minHeight: { xs: '40px', sm: '48px' }
            }}
          >
            {icon}
          </Box>
          <Box sx={{ 
            flexGrow: 1,
            width: { xs: '100%', sm: 'auto' }
          }}>
            <Typography 
              variant="subtitle2" 
              color="text.secondary" 
              gutterBottom
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                mb: 1, 
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              {value}
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5,
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              <TrendingUpIcon sx={{ 
                color: 'success.main', 
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }} />
              <Typography 
                variant="caption" 
                color="success.main" 
                sx={{ 
                  fontWeight: 500,
                  fontSize: { xs: '0.7rem', sm: '0.75rem' }
                }}
              >
                {change}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const StudioStats: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          icon={<PhotoCamera sx={{ color: 'white' }} />}
          title="Studio Bookings"
          value="45"
          change="+12% last month"
          color="#2ed573"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          icon={<People sx={{ color: 'white' }} />}
          title="Active Clients"
          value="128"
          change="+8% last month"
          color="#70a1ff"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          icon={<AttachMoney sx={{ color: 'white' }} />}
          title="Revenue"
          value="$8,450"
          change="+15% last month"
          color="#ff6b81"
        />
      </Grid>
    </Grid>
  );
};

export default StudioStats; 