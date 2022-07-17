import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import first from './first.json';

export default function Weather() {
  const [clouds, setClouds] = React.useState(first);
  const [open, setOpen] = React.useState(false);
  const handleClick = async () => {
    const resp = await axios.get('./data/weather.json');
    console.log(resp.data);
    setClouds(resp.data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getIcon = (stuff) => {
    const url = `./icons/${stuff.Day.Icon}.png`;
    return url;
  };
  return (
    <Box sx={{ position: 'fixed', bottom: 10, right: 10 }}>
      <Fab size="medium" color="secondary" onClick={handleClick}>
        <ThunderstormIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <MenuItem>Westlake, Oh</MenuItem>
        {clouds.map((temp) => (
          <Box sx={{ textAlign: 'center' }} key={temp.EpochDate}>
            <Link href={temp.Link} sx={{ textDecoration: 'none', color: 'white' }}>
              <Divider />
              <MenuItem>
                <Box sx={{ width: '100%' }}>
                  {new Date(temp.EpochDate * 1000).toLocaleString('en-us', { weekday: 'long' }) === new Date().toLocaleString('en-us', { weekday: 'long' })
                    ? 'Today'
                    : new Date(temp.EpochDate * 1000).toLocaleString('en-us', { weekday: 'long' })}
                </Box>
                <img src={getIcon(temp)} alt={temp.Day.IconPhrase} />
                {`${temp.Temperature.Maximum.Value} °F / ${temp.Temperature.Minimum.Value} °F`}
              </MenuItem>
            </Link>
          </Box>
        ))}
      </Dialog>
    </Box>
  );
}
