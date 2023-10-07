import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

export default function ImgMediaCard({ place, checked }) {
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card
        style={{
          maxWidth: 545,
          fontFamily: 'Nunito',
          background: 'rgba(0, 0, 0, 0.5)',
          margin: '20px'
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          image={place.imageUrl}
          title="Island 1"
          style={{
            height:440
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            style={{
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              fontSize: '2rem',
              color: '#fff',
            }}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              fontFamily: 'Nunito',
              fontSize: '1.1rem',
              color: '#ddd',
            }}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}