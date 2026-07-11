import React, {useState} from 'react';
import { Container, Typography } from '@mui/material';
import { notFoundContainerStyle } from './Styles';
import NotFound from './components/NotFound';


function PageNotFound () {

  return (
      <Container sx={notFoundContainerStyle}>
        <NotFound error='Page not found'/>
    </Container>
  );
    }

export default PageNotFound
