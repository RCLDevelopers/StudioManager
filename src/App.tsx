import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Dashboard from './pages/Dashboard';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#4CAF50',
      lighter: '#E8F5E9',
    },
    info: {
      main: '#2196F3',
      lighter: '#E3F2FD',
    },
    warning: {
      main: '#FF9800',
      lighter: '#FFF3E0',
    },
    error: {
      main: '#F44336',
      lighter: '#FFEBEE',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 0 20px 0 rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Dashboard />
  </ThemeProvider>
);

export default App;
