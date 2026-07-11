import { Container, Typography} from "@mui/material";
import BasicTabs from "./components/AdminTabs";
import { containerStyle } from "./Styles";


export default function AdminArea () {
    return (
        <>        
            <Container sx={containerStyle}>
                <Typography 
                    variant='h3' 
                    component='h1' 
                    gutterBottom 
                    align="left"
                    sx={{
                        fontFamily: 'Blinker'
                    }}
                >
                    Admin
                </Typography>
                <BasicTabs></BasicTabs>
            </Container>
        </>
    );
}
