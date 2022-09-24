import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Blurb from '../components/about-me/Blurb';
import DisplayGreeting from '../components/DisplayGreeting';
import FixedWidgets from '../components/FixedWidgets';
import HeaderBar from '../components/header/HeaderBar';
import MyPhoto from '../components/about-me/MyPhoto';
import Featured from '../components/my-work/Featured';
import { projects } from '../src/projects';
import FooterText from '../components/FooterText';

export const AppContext = createContext()

export default function Home() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  const [open, setOpen] = useState(false)
  const [refs, setRefs] = useState({})

  useEffect(() => {
    if (isDesktop && open) setOpen(false) 
  }, [isDesktop, open])

  const scrollOnClick = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth"})
    if (open) setOpen(false)
  }

  return (
    <>
      <Head>
        <title>Oliver Keane - Front End Developer</title>
        <meta name="description" content="Oliver Keane's Portfolio Website" />
        <link rel="icon" href="squidlogo.svg" />
      </Head>

      <Box sx={{overflowX: 'clip'}}>
        <AppContext.Provider 
          value={{
            open: open, 
            setOpen: setOpen, 
            isDesktop: isDesktop, 
            scrollOnClick: scrollOnClick,
            refs: refs,
            setRefs: setRefs,
            }}>

          <HeaderBar theme={theme}/>

          <Container maxWidth={'lg'} 
            sx={{
              filter: open ? 'blur(6px)' : 'none',
              transition: 'filter 200ms ease-in-out',
              mt: 10, 
              mb: 2,
              overflow: 'hidden',
              '& .highlightedText': {
                color: theme.palette.primary.main, 
                fontWeight: 500
              }, '@media (max-width: 1280px) and (min-width: 900px)': {
                px: 12
              }
            }}>

            <Box>
              <Typography fontSize={70} lineHeight={1.1}>
                Good
                <DisplayGreeting/>
                - I&apos;m <Box className='highlightedText' component='span'>Oliver</Box>
              </Typography>
              <Typography sx={{fontSize: 40}}>
                <Box className='highlightedText' component='span'>Front End Developer </Box>
                &amp;
                <Box className='highlightedText' component='span'> Blockchain Enthusiast</Box>
              </Typography>

              <Typography sx={{maxWidth: '520px', fontSize: 22, mt: 2.2}}>
                I&apos;m a developer specialising in
                <Box className='highlightedText' component='span'> NextJS </Box> 
                &amp; 
                <Box className='highlightedText' component='span'> React</Box>
                , and enjoy working with communities and likeminded people to build tools for everyday users.
              </Typography>

              <Button onClick={() => scrollOnClick(refs['02'])} sx={{
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

            <Container disableGutters sx={{mt: isDesktop ? 10 : 3}}>
              <Box>

                <SectionHeading text={"About Me"} sectionNum={'01'}/>

                <Box sx={{
                  display: 'flex', 
                  position: 'relative',
                  flexDirection: isDesktop ? 'row' : 'column',
                  gap: isDesktop ? 2 : 4
                }}>

                  <Blurb isDesktop={isDesktop}/>
                  <MyPhoto isDesktop={isDesktop}/>
                  
                </Box>

              </Box>
            </Container>

            {/* disableGutters needs to check opposite of isDesktop */}
            <Container disableGutters={!isDesktop} 
            sx={{
              mt: isDesktop ? 10 : 3,
              '& .projectBox:first-of-type': {
                mt: 3
              }
            }}>
              <Container disableGutters={!isDesktop}>
                <SectionHeading text={"My Projects"} sectionNum={'02'}/>
                
                {
                  projects.map((project, index) => {
                    // We see if the remainder of the current index is 0 to alternate project images left/right.
                    return <Featured props={project} imgLeft={index % 2 === 0 ? true : false} key={index}/>
                  })
                }

                <Container disableGutters={!isDesktop} 
                sx={{
                  mb: 12, 
                  mt: isDesktop ? 12 : 3
                }}>
                  <Container disableGutters={!isDesktop}>

                      <SectionHeading sectionNum={'03'} text={"What's next?"}/>

                      <Stack sx={{alignItems: 'center'}}>
                        <Typography sx={{fontWeight: 600, fontSize: 50, color: theme.palette.primary.main}}>
                          Get In Touch
                        </Typography>

                        <Typography sx={{
                          textAlign: 'center', 
                          mb: 4,
                          width: isDesktop ? '50vw' : '80vw',
                          
                        }}>
                          I&apos;m currently interested in new opportunities, and my inbox is always open.
                          If you have any questions or even just want to say hello, send me an email
                          or message me on LinkedIn and I&apos;ll do my best to reply!
                        </Typography>

                        <Button sx={{
                          border: `2px solid ${theme.palette.primary.main}`,
                          py: 1.2,
                          px: 5.5,
                          fontSize: 24,
                          textTransform: 'none',
                          '& a': {
                            textDecoration: 'none',
                            color: 'inherit'
                          }
                        }}>
                          <a href="mailto:ollyfudgey5@gmail.com" target="_blank" rel="noreferrer">
                            Say Hello
                          </a>
                        </Button>
                      </Stack>

                  </Container>
                </Container>

              </Container>
            </Container>

            <FooterText/>

            <FixedWidgets theme={theme}/>
          </Container>
        </AppContext.Provider>
      </Box>
    </>
  )
}
