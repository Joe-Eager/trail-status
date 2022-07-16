import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Weather() {
  const [clouds, setClouds] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/2237651?apikey=v1Ug0Fpwt17gIzfnBQgCXGpBtEWnkXGO')
      .then((resp) => {
        setClouds(resp.data.DailyForecasts);
      });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-Menu' : undefined;

  const getIcon = (stuff) => {
    const url = `./icons/${stuff.Day.Icon}.png`;
    return url;
  };
  return (
    <Box sx={{ position: 'absolute', bottom: 40, right: 40 }}>
      <Fab size="medium" color="secondary" aria-label="add" onClick={handleClick}>
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
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem>Westlake, Oh</MenuItem>
        {clouds.map((temp) => (
          <Box sx={{ textAlign: 'center' }} key={temp.EpochDate}>
            <Divider />
            <MenuItem>
              {new Date(temp.EpochDate * 1000).toDateString() === new Date().toDateString()
                ? 'Today'
                : new Date(temp.EpochDate * 1000).toDateString().replace(/\d{4}/, '')}
            </MenuItem>
            <MenuItem>
              <img src={getIcon(temp)} alt={temp.Day.IconPhrase} />
            </MenuItem>
            <MenuItem>
              {`${temp.Temperature.Maximum.Value} °F / ${temp.Temperature.Minimum.Value} °F`}
            </MenuItem>
          </Box>
        ))}
      </Menu>
    </Box>
  );
}
