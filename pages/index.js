import { Button, Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import Head from 'next/head'
import DisplayGreeting from '../components/DisplayGreeting';
import FixedWidgets from '../components/FixedWidgets';
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
            border: `solid 2px ${palette.primary.main}`,
            fontSize: 22,
            px: 5,
            py: 1.75,
            borderRadius: 2
          }}>
            View my work!
          </Button>
        </Box>

        <FixedWidgets/>
      </Container>

    </>
  )
}
