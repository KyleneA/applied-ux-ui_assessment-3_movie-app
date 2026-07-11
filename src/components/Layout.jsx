import { Outlet  } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Sidebar from './Sidebar';

const drawerWidth = 240;
const containerStyle = {
  display: 'flex',
};
const mainStyle = {
  flexGrow: 1, 
  margin: '0 auto',
  width: `calc(100% - ${drawerWidth}px)`,
};

export default function Layout() {
  return (
    <Container sx={containerStyle}> 
      <Sidebar />
      <Box component="main" sx={mainStyle}>
        <Outlet />
      </Box>
    </Container>
  );
}




