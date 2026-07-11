import { useNavigate } from "react-router-dom";
import { Button,Typography, Box, Stack,  
} from "@mui/material";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import {notFoundStackStyle} from '../Styles'


export default function NotFound(props) {
    const navigate = useNavigate();

    console.log(props.error);
    return(
        <Stack 
            spacing={4} 
            sx={notFoundStackStyle}
        >
            
            <Box>
                <HeartBrokenIcon 
                    fontSize='large'
                    color="error"
                />
            </Box>

            <Typography 
                variant='h3' 
                component='h1'
                color="error"
                gutterBottom
                sx={{
                    fontFamily: 'Blinker'
                }}
            >
                {props.error}
            </Typography>

            <Button 
                variant="contained"
                onClick={() => navigate('/')} 
            >
                Back To Home
            </Button>
        </Stack>
    );
}