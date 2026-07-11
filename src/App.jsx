import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Custom Components*/
import Layout from './components/Layout';
import MovieDetails from './MovieDetails'
import PageNotFound from './PageNotFound'
import MovieList from './MovieList'
import AdminArea from './AdminArea';
import theme from './Themes';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MovieList />} />
                    <Route path="MovieDetails/:id" element={<MovieDetails />} />
                    <Route path="AdminArea" element={<AdminArea />} />
                    <Route path="*" element={<PageNotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>  
    </ThemeProvider>


    </>
  )
}

export default App
