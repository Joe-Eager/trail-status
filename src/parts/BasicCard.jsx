import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import initialize from './output.json';
import rays from './rays';

const cardMaker = (data) => {
  let textColor = '#c0ca33';
  if (data.time !== 'Today') {
    textColor = '#757575';
  }
  return (
    <Box
      sx={{
        display: 'inline-block',
        mb: 2,
        ml: 2,
        height: '100%',
        backgroundColor: '#424242',
        borderRadius: 6,
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
    </Box>
  );
};

export default function BasicCard() {
  const [output, setOutput] = React.useState(initialize);
  const handleClick = async () => {
    const resp = await axios.get('./data/output.json');
    setOutput(resp.data);
  };
  React.useEffect(() => handleClick, []);
  return (
    <Box>
      <Typography
        variant="body"
        component="p"
        sx={{
          color: '#757575', width: '100%', textAlign: 'center',
        }}
      >
        {output.update.time ? output.update.time : 'Refresh me'}
      </Typography>
      <Box sx={{
        textAlign: 'center', pr: 2, ml: 6, mr: 6,
      }}
      >
        {cardMaker(output.bedford)}
        {cardMaker(output.eastRim)}
        {cardMaker(output.hampHill)}
        {cardMaker(output.OECR)}
        {cardMaker(rays(new Date()))}
        {cardMaker(output.royalView)}
        {cardMaker(output.vulturesKnob)}
        {cardMaker(output.westCreek)}
      </Box>
    </Box>
  );
}
