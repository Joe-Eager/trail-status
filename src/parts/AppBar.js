import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <PedalBikeSharpIcon sx={{ display: { md: 'flex' }, mr: 1 }}  color={'secondary'} />
                    <Typography
                        variant="h6"
                        sx={{
                            mr: 2,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        TRAIL STATUS
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
