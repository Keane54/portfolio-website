import { Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import Head from 'next/head'
import DisplayGreeting from '../components/DisplayGreeting';
import HeaderBar from '../components/HeaderBar';



export default function Home() {
  const theme = useTheme()

  const { palette } = theme

  return (
    <>
      <Head>
        <title>Oliver - React Developer</title>
        <meta name="description" content="Oliver Keane's Portfolio Website" />
        <link rel="icon" href="squidlogo.svg" />
      </Head>

      <HeaderBar palette={palette}/>

      <Container sx={{marginTop: 10}}>
        <Box>
          <Typography>
            <DisplayGreeting/> - I&apos;m <Box component='span'>Oliver</Box>
          </Typography>
        </Box>
      </Container>
    </>

  )
}
