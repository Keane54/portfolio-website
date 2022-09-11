import { Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import Head from 'next/head'
import DisplayGreeting from '../components/DisplayGreeting';
import HeaderBar from '../components/HeaderBar';



export default function Home() {
  const theme = useTheme()

  // We pass the palette down as props to components which need it for this page.
  const { palette } = theme

  return (
    <>
      <Head>
        <title>Oliver - React Developer</title>
        <meta name="description" content="Oliver Keane's Portfolio Website" />
        <link rel="icon" href="squidlogo.svg" />
      </Head>

      <HeaderBar palette={palette}/>

      <Container sx={{marginTop: 6, '& .MuiTypography-root > .MuiBox-root': {
        color: palette.primary.main, fontWeight: 500
      }}}>
        <Box>
          <Typography fontSize={70} lineHeight={0.9}>
            <DisplayGreeting/>
            - I&apos;m <Box component='span'>Oliver</Box>
          </Typography>
          <Typography sx={{fontSize: 40}}>
            <Box component='span'>Front End Developer </Box>
            &amp;
            <Box component='span'> Blockchain Enthusiast</Box>
          </Typography>

          <Typography>
            I&apos;m a developer specialising in
            <Box component='span'> React </Box> 
            &amp; 
            <Box component='span'> NextJS</Box>
            , and enjoy working with communities and likeminded people to build tools for everyday users.
          </Typography>
        </Box>
      </Container>
    </>
  )
}
