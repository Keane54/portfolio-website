import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'
import { keyframes } from '@emotion/react'
import DesktopMenu from './DesktopMenu';
import MobileSidebar from './MobileSidebar';

const squidWiggle = keyframes`
0% {
    transform: scale(1) rotate(0deg);
}
50% {
    transform: scale(1.2) rotate(0deg);
}
60% {
    transform: scale(1.2) rotate(10deg);
}
70% {
    transform: scale(1.2) rotate(0deg);
}
80% {
    transform: scale(1.2) rotate(-10deg);
}
100% {
    transform: scale(1.2) rotate(0deg);
}
`;

const HeaderBar = ( { theme } ) => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <AppBar elevation={0} sx={{background: 'white', color:'black', position: 'static'}}>
            <Container sx={{
                '@media (max-width: 1200px) and (min-width: 900px)': {
                px: 8
            }}}>

            <Toolbar sx={{justifyContent: 'space-between', alignItems: 'center'}} disableGutters>

                <Box sx={{
                    overflow: 'visible !important', 
                    '& span': {
                        overflow: 'visible !important',
                        display: 'block'
                    }, '& img': {
                        transition: 'transform 300ms ease-in-out'
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
                            color: theme.palette.primary.main
                        }
                    }
                }}>

                {isDesktop ? <DesktopMenu/> : <MobileSidebar/>}

                </Box>

            </Toolbar>

            </Container>
        </AppBar>
    )
}

export default HeaderBar