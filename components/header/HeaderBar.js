import { AppBar, Toolbar } from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'
import { keyframes } from '@emotion/react'
import DesktopMenu from './DesktopMenu';
import MobileSidebar from './MobileSidebar';
import { useContext } from 'react';
import { AppContext } from '../../pages';
import { useScrollDirection } from '../hooks/useScrollDirection';

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
    
    const {isDesktop} = useContext(AppContext)

    const scrollDirection = useScrollDirection()

    return (
        <AppBar elevation={0} sx={{
            background: 'white', 
            color:'black', 
            position: 'fixed', 
            top: 0,
            transition: 'transform 250ms ease-in-out',
            transform: scrollDirection === "down" ? 'translateY(-100%)' : 'translateY(0)',
        }}>
            <Container sx={{
                '@media (max-width: 1280px) and (min-width: 900px)': {
                px: 12
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
                        transition: 'all 200ms ease-in-out',
                        '&:hover': {
                            cursor: 'pointer',
                            color: theme.palette.secondary.main,
                            transform: 'scale(1.05)',
                            '& .MuiBox-root': {
                                color: theme.palette.secondary.main,
                            }
                        },
                        "& .MuiBox-root": {
                            color: theme.palette.primary.main,
                            transition: 'all 200ms ease-in-out'
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