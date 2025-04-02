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
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Recent Bookings</Typography>
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
            sx={{ width: 250 }}
          />
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={booking.client.avatar} alt={booking.client.name} />
                      <Box>
                        <Typography variant="subtitle2">{booking.client.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {booking.client.location}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{booking.type}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.duration}</TableCell>
                  <TableCell>
                    <Chip
                      label={booking.status}
                      size="small"
                      color={booking.status === 'Confirmed' ? 'success' : 'warning'}
                    />
                  </TableCell>
                  <TableCell>{booking.amount}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
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