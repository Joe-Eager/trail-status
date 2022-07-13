import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function ResponsiveAppBar() {
  return (
    <AppBar position="static" id="appBar">
      <Toolbar disableGutters>
        <PedalBikeSharpIcon sx={{ ml: 2 }} color="secondary" />
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            display: { md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          CLE MTB TRAIL STATUS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
