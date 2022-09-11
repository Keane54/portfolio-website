import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'
import { keyframes } from '@emotion/react'

const HeaderBar = ( { palette } ) => {
    const squidWiggle = keyframes`
        0% {
            transform: scale(1) rotate(0deg);
        }
        60% {
            transform: scale(1.2) rotate(0deg);
        }
        75% {
            transform: scale(1.1) rotate(10deg);
        }
        90% {
            transform: scale(1.15) rotate(-10deg);
        }
        100% {
            transform: scale(1.2) rotate(0deg);
        }
    `;

    return (
        <AppBar elevation={0} sx={{background: 'white', color:'black', position: 'static'}}>
            <Container>

            <Toolbar sx={{justifyContent: 'space-between'}} disableGutters>

                <Box sx={{overflow: 'visible !important', '& span': {
                        overflow: 'visible !important'
                    }, '& img': {
                        transition: 'transform 300ms ease-in-out '
                    }, '& img:hover': {
                        transform: 'scale(1.2)',
                        animation: `${squidWiggle} 0.75s ease`
                    }
                }}>
                    <Image  src="/squidlogo.svg" width={32} height={32}
                    alt="A pink squid standing upright in the top left corner of the header."/>
                </Box>


                <Box sx={{
                    display: 'flex', 
                    gap: 5, 
                    "& .MuiTypography-root": {
                        fontSize: '1.15rem',
                        fontFamily: `'Roboto Slab', "serif"`,
                        "& .MuiBox-root": {
                            color: palette.primary.main
                        }
                    }
                }}>

                    <Typography>
                        <Box component="span">01</Box>. About
                    </Typography>
                    <Typography>
                        <Box component="span">02</Box>. Work
                    </Typography>
                    <Typography>
                        <Box component="span">03</Box>. Contact
                    </Typography>

                </Box>

            </Toolbar>

            </Container>
        </AppBar>
    )
}

export default HeaderBar