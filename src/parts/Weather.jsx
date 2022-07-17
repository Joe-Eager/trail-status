import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import first from './first.json';

export default function Weather() {
  const [clouds, setClouds] = React.useState(first);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
    const resp = await axios.get('./data/weather.json');
    console.log(resp.data);
    setClouds(resp.data);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getIcon = (stuff) => {
    const url = `./icons/${stuff.Day.Icon}.png`;
    return url;
  };
  return (
    <Box sx={{ position: 'fixed', bottom: 10, right: 10 }}>
      <Fab
        size="medium"
        color="secondary"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ThunderstormIcon />
      </Fab>
      <Menu
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
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
      </Menu>
    </Box>
  );
}
