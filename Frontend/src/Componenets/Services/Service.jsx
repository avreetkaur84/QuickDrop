import React from 'react';
import { Container } from '@mui/material';


import MultiModal from './MultiModal';
import SharedDelivery from './SharedDelivery';


const Service = () => {
  return (
    <Container maxWidth="lg">
        <div className="">
            <MultiModal/>
        </div>

      <div className="">
        <SharedDelivery/>
      </div>

    </Container>
  );
};

export default Service;