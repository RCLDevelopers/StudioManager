import React, { useState } from 'react';
import { Drawer, List, Box, Typography, ListItemButton, ListItemIcon, ListItemText, Avatar, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WeekendIcon from '@mui/icons-material/Weekend';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { title: 'Studios', path: '/studios', icon: <WeekendIcon /> },
  { title: 'Bookings', path: '/bookings', icon: <CalendarMonthIcon /> },
  { title: 'Clients', path: '/clients', icon: <PeopleIcon /> },
  { title: 'Equipment', path: '/equipment', icon: <InventoryIcon /> },
  { title: 'Payments', path: '/payments', icon: <PaymentIcon /> },
  { title: 'Invoices', path: '/invoices', icon: <ReceiptIcon /> },
  { title: 'Reports', path: '/reports', icon: <BarChartIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const [activeItem, setActiveItem] = useState('Dashboard');

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
          bgcolor: '#FFF8F6',
          borderRight: 'none',
        },
      }}
      variant="persistent"
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src="/zangtics-logo.png" sx={{ width: 40, height: 40 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
          Studio Manager
        </Typography>
      </Box>
      
      <Box sx={{ px: 2, py: 1, overflow: 'auto' }}>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.title}
              onClick={() => setActiveItem(item.title)}
              sx={{
                py: 1.5,
                mb: 0.5,
                borderRadius: 2,
                color: activeItem === item.title ? '#FF6B00' : '#666',
                bgcolor: activeItem === item.title ? '#FFF0E6' : 'transparent',
                '&:hover': {
                  bgcolor: activeItem === item.title ? '#FFF0E6' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: 0, 
                  mr: 2,
                  color: activeItem === item.title ? '#FF6B00' : '#666',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.title} 
                primaryTypographyProps={{ 
                  fontSize: 14,
                  fontWeight: activeItem === item.title ? 600 : 400,
                }} 
              />
            </ListItemButton>
          ))}
        </List>
        
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <ListItemButton
            sx={{
              py: 1.5,
              borderRadius: 2,
              color: '#666',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 2, color: '#666' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Log out" 
              primaryTypographyProps={{ 
                fontSize: 14,
              }} 
            />
          </ListItemButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
