import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import output from './output.json';
import rays from './rays';

export default function BasicCard() {
  const cardMaker = (data) => {
    let textColor = '#c0ca33';
    if (data.time !== 'Today') {
      textColor = '#757575';
    }
    return (
      <div
        style={{
          display: 'inline-block',
          margin: '0px 0px 20px 20px',
          backgroundColor: '#424242',
          borderRadius: 24,
          maxWidth: 640,
        }}
      >
        <Card
          component="a"
          href={data.url}
          sx={{ minWidth: 275, maxWidth: 640, textDecoration: 'none' }}
        >
          <CardContent>
            <Typography variant="h6" component="div" sx={{ mb: -0.64 }}>
              {data.name}
              {data.status ? (
                <CheckCircleIcon color="secondary" sx={{ mb: -0.64, ml: 1 }} />
              ) : (
                <CancelIcon color="warning" sx={{ mb: -0.64, ml: 1 }} />
              )}
            </Typography>
            <Typography variant="caption" sx={{ ml: -2 }}>
              <i style={{ color: textColor }}>
                Last Updated:
                {' '}
                {data.time}
              </i>
            </Typography>
            <Typography variant="body2">{data.tweet.replace(/&amp;/ig, '&')}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center', marginRight: 20 }}>
      <Typography variant="body" component="p" sx={{ m: 1 }} style={{ color: '#757575' }}>
        {output.update.time}
      </Typography>
      {cardMaker(output.bedford)}
      {cardMaker(output.eastRim)}
      {cardMaker(output.hampHill)}
      {cardMaker(output.OECR)}
      {cardMaker(rays(new Date()))}
      {cardMaker(output.royalView)}
      {cardMaker(output.vulturesKnob)}
      {cardMaker(output.westCreek)}
    </div>
  );
}
