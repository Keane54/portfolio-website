import { Button, Typography, useMediaQuery } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import Head from 'next/head'
import { createContext, useState } from 'react';
import DisplayGreeting from '../components/DisplayGreeting';
import FixedWidgets from '../components/FixedWidgets';
import HeaderBar from '../components/HeaderBar';

export const MenuStatus = createContext()

export default function Home() {
  const theme = useTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Oliver - React Developer</title>
        <meta name="description" content="Oliver Keane's Portfolio Website" />
        <link rel="icon" href="squidlogo.svg" />
      </Head>

      
      <MenuStatus.Provider value={[open, setOpen]}>
        <HeaderBar theme={theme}/>

        <Container maxWidth={'lg'} 
          sx={{
            filter: open ? 'blur(6px)' : 'none',
            transition: 'filter 200ms ease-in-out',
            marginTop: 6, 
            '& .MuiTypography-root > .MuiBox-root': {
              color: theme.palette.primary.main, 
              fontWeight: 500
            }, '@media (max-width: 1200px) and (min-width: 900px)': {
              px: 8
            }
          }}>

          <Box>
            <Typography fontSize={70} lineHeight={1.1}>
              Good
              <DisplayGreeting/>
              - I&apos;m <Box component='span'>Oliver</Box>
            </Typography>
            <Typography sx={{fontSize: 40}}>
              <Box component='span'>Front End Developer </Box>
              &amp;
              <Box component='span'> Blockchain Enthusiast</Box>
            </Typography>

            <Typography sx={{maxWidth: '520px', fontSize: 22, mt: 2.2}}>
              I&apos;m a developer specialising in
              <Box component='span'> NextJS </Box> 
              &amp; 
              <Box component='span'> React</Box>
              , and enjoy working with communities and likeminded people to build tools for everyday users.
            </Typography>

            <Button sx={{
              mt: 3.8,
              textTransform: 'none', 
              border: `solid 2px ${theme.palette.primary.main}`,
              fontSize: 22,
              px: 5,
              py: 1.75,
              borderRadius: 2
            }}>
              View my work!
            </Button>
          </Box>

          <FixedWidgets theme={theme}/>

        </Container>
      </MenuStatus.Provider>

    </>
  )
}
