import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import output from './output.json';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function BasicCard() {

  const cardMaker = (type) => {
    return (
      <div style={{ margin: 20, backgroundColor: '#212121', borderRadius: 24, maxWidth: 640 }}>
        <Card
          component="a"
          href={output[type].url}
          sx={{ minWidth: 275, maxWidth: 640, textDecoration: 'none' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {output[type].name}
            </Typography>{output[type].status ? <CheckCircleIcon color={'secondary'} /> : <CancelIcon color={'warning'} />}
            <Typography variant="body2">
              {output[type].tweet}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {cardMaker('bedford')}
      {cardMaker('eastRim')}
      {cardMaker('hampHill')}
      {cardMaker('OECR')}
      {cardMaker('royalView')}
      {cardMaker('vulturesKnob')}
      {cardMaker('westCreek')}
    </div>
  )
}