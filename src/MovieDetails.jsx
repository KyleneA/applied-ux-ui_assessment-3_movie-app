import { useParams, useNavigate } from "react-router-dom";
import { Container, Button,Typography, Box, Grid, Stack,  
} from "@mui/material";
import mockMovieData from './data/mockMovieData.json';
import NotFound from "./components/NotFound";
import {notFoundContainerStyle, containerStyle} from "./Styles.jsx"

export default function MovieDetails() {
  const { id } = useParams(); // Grabs the ID from the URL path
  const navigate = useNavigate();

  // Find the item matching the ID from the URL
  const movie = mockMovieData.find((movie) => movie.id === id);

  
  if (!movie) {
    const errorMsg = `Movie ID ${id} not found`;
    console.log(errorMsg, notFoundContainerStyle);
    return (
      <Container sx={notFoundContainerStyle}>
        <NotFound error={errorMsg} />
      </Container>
    );
  }
  
  const movieCast = movie.cast;

  return (
    <Container sx={containerStyle} id={movie.title}>
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          mx: 'auto', 
          textAlign: 'center' 
        }}
      >
        <Grid 
          size={12} 
          sx={{ 
            flexGrow: 1, 
            justifyContent: 'space-between', 
            alignItems: 'stretch'
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              width: "100%",
              justifyContent:"space-around",
              alignItems:"flex-end",
            }}
          >
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{
                fontFamily: 'Blinker'
            }}
            >
              {movie.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              ({id})
            </Typography>
          </Stack>
        </Grid>

        <Grid size={6}>
          <Box 
            component="img" 
            src={movie.img} 
            alt={movie.title} 
            sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>

        <Grid size={6}>
          <Stack
            spacing={3}
            sx={{
              height: '100%',
              alignItems: 'stretch',
              justifyContent: 'space-around',
            }}
          >
            <Stack spacing={1}>
              <Stack
                spacing={1}
                direction={'row'}
                sx={{
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="body1" >
                  <b> Director: </b> {movie.director}
                </Typography>
                
                <Typography variant="body1">
                  <b> Release Year: </b> {movie.year}
                </Typography>
              </Stack>
              
              <Typography 
                variant="body1" 
                sx={{
                  textWrap: 'pretty'
                }}
              >
                <b> Cast: </b> {movieCast.map((actor) => (actor + ", "))}
              </Typography>
            </Stack>
            
            <Stack spacing={1}>
              <Typography 
                variant="body1" 
              >
                <b> Synopsis:  </b>
              </Typography>

              <Typography 
                variant="body1" 
              >
                {movie.desc}
              </Typography>
            </Stack>
            
            
            <Button 
              variant="outlined" 
              color='secondary'
              onClick={() => {
                navigate('/');
                window.scrollTo({top: 0, behavior: "smooth"});
              }}
            >
              Back to List
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}