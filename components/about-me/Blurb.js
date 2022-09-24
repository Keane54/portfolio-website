import { Typography, Stack, Box } from "@mui/material"
import Skills from "./Skills"
import { useEffect, useState } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const Blurb = ({ isDesktop }) => {

    const [containerRef, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      })
    
      const [madeVisible, setMadeVisible] = useState(false)
    
      useEffect(() => {
          isVisible && !madeVisible ? setMadeVisible(true) : null
      }, [isVisible, madeVisible])

    return (
        <Box ref={containerRef} sx={{
            width: isDesktop ? '60%' : '100%',
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)'
        }}>
            <Stack gap={2} sx={{
            '& .MuiTypography-root': {
                fontSize: 18
            }
            }}>
                <Typography>
                    Hi, I&apos;m Oliver. I&apos;m a self-taught front-end developer who loves
                    to build things with NextJS &amp; React. My journey started when I wanted a
                    career change, so I started learning with 
                    <Box className='highlightedText' component='span'> JavaScript</Box>
                    , before moving onto 
                    <Box className='highlightedText' component='span'> NextJS </Box>
                    &amp; 
                    <Box className='highlightedText' component='span'> React</Box>.
                </Typography>

                <Typography>
                    Soon after landing my first role I began leading development on features for the business and our partners, such as an account linking tool, home inspiration page, and a detailed review system.
                </Typography>

                <Typography>
                    My current work project is to rebuild my companies accounts section using NextJS, and I continue to work on personal projects in my spare time, expanding my knowledge of NextJS, React, and other technologies.
                </Typography>

                <Skills/>
            </Stack>
        </Box>
    )
}

export default Blurb