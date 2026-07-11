import { Card, CardMedia, CardActionArea, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../Themes'

export default function MovieCard(props) {
    const navigate = useNavigate();
    
    const cardStyle = { 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '340px',
        maxHeight: '500px',
        boxShadow: '5px 8px 10px rgba(0, 0, 0, 0.25)',
    };

    const palette = theme.palette;
    console.log(palette);
    return (
        <Card sx={cardStyle}>
            <CardActionArea 
                onClick={() => {
                    navigate(`/MovieDetails/${props.id}`, {replace: true}); 
                    window.scrollTo({top: 0, behavior: "smooth"});
                }}
            >
                <CardHeader 
                    component="div"
                    title={props.title}
                    sx={{
                        minHeight: '25%',
                        padding: 0,
                        textWrap: 'pretty',
                    }}
                >
                </CardHeader>
                <CardMedia
                    component="img"
                    height="100%"
                    image={props.img}
                    alt={props.title}
                    sx={{
                        objectPosition: 'top'
                    }}

                />
            </CardActionArea>
        </Card>
    );
}