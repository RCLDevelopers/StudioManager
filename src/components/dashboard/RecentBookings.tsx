import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';

const bookings = [
  {
    id: 1,
    client: {
      name: 'John Smith',
      avatar: '/avatars/1.jpg',
      location: 'New York',
    },
    type: 'Photo Studio',
    date: '2024-04-15',
    duration: '2 hours',
    status: 'Confirmed',
    amount: '$250',
  },
  {
    id: 2,
    client: {
      name: 'Emma Wilson',
      avatar: '/avatars/2.jpg',
      location: 'Los Angeles',
    },
    type: 'Video Studio',
    date: '2024-04-16',
    duration: '4 hours',
    status: 'Pending',
    amount: '$500',
  },
  {
    id: 3,
    client: {
      name: 'Michael Brown',
      avatar: '/avatars/3.jpg',
      location: 'Chicago',
    },
    type: 'Photo Studio',
    date: '2024-04-17',
    duration: '3 hours',
    status: 'Confirmed',
    amount: '$375',
  },
];

const RecentBookings: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ boxShadow: theme.shadows[2] }}>
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'stretch', sm: 'center' }, 
          gap: 2,
          mb: 3 
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Recent Bookings
          </Typography>
          <TextField
            size="small"
            placeholder="Search bookings..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ 
              width: { xs: '100%', sm: 250 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
              }
            }}
          />
        </Box>
        <TableContainer sx={{ 
          maxHeight: { xs: 400, md: 'none' },
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                {!isMobile && <TableCell>Type</TableCell>}
                <TableCell>Date</TableCell>
                {!isMobile && <TableCell>Duration</TableCell>}
                <TableCell>Status</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow 
                  key={booking.id} 
                  hover
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    transition: 'background-color 0.2s',
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        src={booking.client.avatar} 
                        alt={booking.client.name}
                        sx={{ 
                          width: 40, 
                          height: 40,
                          boxShadow: theme.shadows[2],
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {booking.client.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {booking.client.location}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  {!isMobile && <TableCell>{booking.type}</TableCell>}
                  <TableCell>{booking.date}</TableCell>
                  {!isMobile && <TableCell>{booking.duration}</TableCell>}
                  <TableCell>
                    <Chip
                      label={booking.status}
                      size="small"
                      color={booking.status === 'Confirmed' ? 'success' : 'warning'}
                      sx={{ 
                        fontWeight: 500,
                        borderRadius: 1,
                        '& .MuiChip-label': { px: 2 },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{booking.amount}</TableCell>
                  <TableCell align="right">
                    <IconButton 
                      size="small"
                      sx={{ 
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                        }
                      }}
                    >
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default RecentBookings; 