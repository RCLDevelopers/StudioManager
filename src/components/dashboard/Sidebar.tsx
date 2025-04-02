import { Drawer, List, Box, Divider, Typography, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WeekendIcon from '@mui/icons-material/Weekend';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const navItems = [
    { 
      title: 'Dashboard', 
      path: '/', 
      icon: <DashboardIcon /> 
    },
    { 
      title: 'Studios', 
      path: '/studios', 
      icon: <WeekendIcon /> 
    },
    { 
      title: 'Bookings', 
      path: '/bookings', 
      icon: <CalendarMonthIcon /> 
    },
    { 
      title: 'Clients', 
      path: '/clients', 
      icon: <PeopleIcon /> 
    },
    { 
      title: 'Equipment', 
      path: '/equipment', 
      icon: <InventoryIcon /> 
    },
    { 
      title: 'Payments', 
      path: '/payments', 
      icon: <PaymentIcon /> 
    },
    { 
      title: 'Invoices', 
      path: '/invoices', 
      icon: <ReceiptIcon /> 
    },
    { 
      title: 'Reports', 
      path: '/reports', 
      icon: <BarChartIcon /> 
    },
  ];

  const accountItems = [
    { 
      title: 'Profile', 
      path: '/profile', 
      icon: <PersonIcon /> 
    },
    { 
      title: 'Settings', 
      path: '/settings', 
      icon: <SettingsIcon /> 
    },
    { 
      title: 'Logout', 
      path: '/logout', 
      icon: <LogoutIcon /> 
    },
  ];

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src="/public/zangtics-logo.png" sx={{ width: 40, height: 40 }} />
        <Typography variant="h6" noWrap component="div">
          Studio Manager
        </Typography>
      </Box>
      
      <Divider />
      
      <Box sx={{ py: 2, overflow: 'auto' }}>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.title}
              sx={{
                py: 1,
                minHeight: 48,
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.title} 
                primaryTypographyProps={{ fontSize: 14 }} 
              />
            </ListItemButton>
          ))}
        </List>
        
        <Divider sx={{ my: 1 }} />
        
        <List>
          {accountItems.map((item) => (
            <ListItemButton
              key={item.title}
              sx={{
                py: 1,
                minHeight: 48,
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.title} 
                primaryTypographyProps={{ fontSize: 14 }} 
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
