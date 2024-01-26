import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import Image1 from './fffffffffffffffffffffffffffff.jpg';
import Image2 from './vk-2048.png';

const RootGrid = styled(Grid)({
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '16px',
  backgroundColor: 'rgba(0,0,0,0.25)',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
});

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: '0 16px',
  textDecoration: 'none',
  display: 'inline-block',
});

const Bottom = () => {
  return (
    <RootGrid container justifyContent="center">
      <a href="https://www.maam.ru/users/434081" className={StyledCard} target="_blank" rel="noopener noreferrer">
        <StyledCard>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={Image1}
          />
        </StyledCard>
      </a>

      <a href="https://vk.com/id653339690" className={StyledCard} target="_blank" rel="noopener noreferrer">
        <StyledCard>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={Image2}
          />
        </StyledCard>
      </a>
    </RootGrid>
  );
};

export default Bottom;
