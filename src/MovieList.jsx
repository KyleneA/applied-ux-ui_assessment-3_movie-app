import { Container, Grid, Pagination, Typography } from '@mui/material';
import mockMovieData from './data/mockMovieData.json'
import MovieCard from './components/MovieCard';
import { containerStyle } from './Styles';

const gridStyle = { 
    width: '100%',
};

export default function MovieList() {
    return (
        <Container sx={containerStyle}>
            <Typography 
                variant='h3' 
                component='h1' 
                gutterBottom 
                align='left'
                sx={{
                    fontFamily: 'Blinker'
                }}
            >
                Movies
            </Typography>

            <Grid 
                container 
                spacing={3} 
                sx={gridStyle}
            >
                {mockMovieData.map((item) => (
                    <Grid 
                        key={item.id} 
                        size={{ 
                            xs: 12,
                            sm: 6,
                            md: 4,
                        }}
                    >
                        <MovieCard 
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
