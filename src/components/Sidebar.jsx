import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export default function Sidebar() {
    function isSelected(text){
        if (text === "Movie List" && location.pathname === "/") return true;
        else if (text === "Admin Area" && location.pathname === "/AdminArea") return true;
        else return false;
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography 
                        variant="h5" 
                        noWrap 
                        component="div"
                    >
                        <VideoStableIcon />
                        Movie App!
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    height: '100vh',
                }}
            >
                <Toolbar />

                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Movie List', 'Admin Area'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    divider
                                    component='a'
                                    href={text === 'Movie List' ? '/' : '/AdminArea'}
                                    selected={isSelected(text)}
                                >
                                    <ListItemIcon>
                                        {text === 'Movie List' ? <HomeIcon /> : <SettingsIcon />}
                                    </ListItemIcon>

                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
