import { Grid, Card, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Divider } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WeekendIcon from '@mui/icons-material/Weekend';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const StatCard = ({ title, value, change, icon, color }) => (
  <Card sx={{ p: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: `${color}.lighter`,
          color: `${color}.main`,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
    </Box>
    <Typography
      variant="subtitle2"
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: change >= 0 ? 'success.main' : 'error.main',
      }}
    >
      <TrendingUpIcon sx={{ mr: 0.5, width: 16, height: 16 }} />
      {change}% this month
    </Typography>
  </Card>
);

const revenueChartOption = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Studio A', 'Studio B', 'Studio C'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Studio A',
      type: 'line',
      smooth: true,
      data: [140, 232, 201, 154, 190, 330, 410, 220],
      color: '#4CAF50',
    },
    {
      name: 'Studio B',
      type: 'line',
      smooth: true,
      data: [120, 182, 191, 264, 290, 330, 310, 220],
      color: '#FF9800',
    },
    {
      name: 'Studio C',
      type: 'line',
      smooth: true,
      data: [80, 152, 231, 124, 150, 180, 280, 140],
      color: '#2196F3',
    },
  ],
};

const studioUsagePieOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    bottom: '0%',
    left: 'center',
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '16',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 38, name: 'Studio A', itemStyle: { color: '#4CAF50' } },
        { value: 32, name: 'Studio B', itemStyle: { color: '#FF9800' } },
        { value: 30, name: 'Studio C', itemStyle: { color: '#2196F3' } },
      ],
    },
  ],
};

// Recent bookings data
const recentBookings = [
  { id: 1, client: 'John Doe', studio: 'Studio A', date: '05 Apr 2023', time: '10:00 - 12:00', status: 'Confirmed' },
  { id: 2, client: 'Jane Smith', studio: 'Studio B', date: '05 Apr 2023', time: '13:00 - 15:00', status: 'Pending' },
  { id: 3, client: 'Robert Johnson', studio: 'Studio C', date: '06 Apr 2023', time: '09:00 - 11:00', status: 'Confirmed' },
  { id: 4, client: 'Emily Davis', studio: 'Studio A', date: '07 Apr 2023', time: '14:00 - 16:00', status: 'Cancelled' },
  { id: 5, client: 'Michael Wilson', studio: 'Studio B', date: '08 Apr 2023', time: '11:00 - 13:00', status: 'Confirmed' },
];

// Top clients data
const topClients = [
  { name: 'Acme Productions', revenue: '$12,500', bookings: 12, avatar: 'A' },
  { name: 'XYZ Studios', revenue: '$8,750', bookings: 8, avatar: 'X' },
  { name: 'Creative Media', revenue: '$7,200', bookings: 7, avatar: 'C' },
  { name: 'Digital Arts', revenue: '$5,900', bookings: 5, avatar: 'D' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Dashboard</Typography>
      </Box>
      
      <Grid container spacing={3}>
        {/* Stat Cards */}
        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Revenue"
            value="$85,125"
            change={+15.8}
            icon={<AttachMoneyIcon />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Bookings"
            value="432"
            change={+8.2}
            icon={<CalendarMonthIcon />}
            color="info"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Active Clients"
            value="128"
            change={+12.5}
            icon={<PeopleIcon />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Studio Occupancy"
            value="76%"
            change={+4.3}
            icon={<WeekendIcon />}
            color="error"
          />
        </Grid>

        {/* Revenue Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Revenue by Studio
            </Typography>
            <ReactECharts option={revenueChartOption} style={{ height: 400 }} />
          </Card>
        </Grid>

        {/* Studio Usage Pie Chart */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Studio Usage
            </Typography>
            <ReactECharts option={studioUsagePieOption} style={{ height: 400 }} />
          </Card>
        </Grid>

        {/* Recent Bookings */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Recent Bookings</Typography>
              <Button variant="text" color="primary">View All</Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Client</TableCell>
                    <TableCell>Studio</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.client}</TableCell>
                      <TableCell>{booking.studio}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.time}</TableCell>
                      <TableCell>
                        <Chip 
                          label={booking.status} 
                          color={
                            booking.status === 'Confirmed' ? 'success' : 
                            booking.status === 'Pending' ? 'warning' : 'error'
                          } 
                          size="small" 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        {/* Top Clients */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Top Clients</Typography>
              <Button variant="text" color="primary">View All</Button>
            </Box>
            <List>
              {topClients.map((client, index) => (
                <Box key={client.name}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: index === 0 ? 'success.main' : index === 1 ? 'warning.main' : 'info.main' }}>
                        {client.avatar}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={client.name}
                      secondary={
                        <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography component="span" variant="body2" color="text.primary">
                            {client.revenue}
                          </Typography>
                          <Typography component="span" variant="body2" color="text.secondary">
                            {client.bookings} bookings
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < topClients.length - 1 && <Divider variant="inset" component="li" />}
                </Box>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
