import { Typography, Box } from "@mui/material"
import { AppContext } from "../../pages"
import { useContext, useEffect, useRef } from "react"

const AboutHeading = ({ theme }) => {
  
  const {isDesktop, refs: {about: {aboutRef, setAboutRef}}} = useContext(AppContext)

  const aboutHeading = useRef();

  useEffect(() => {
    setAboutRef(aboutHeading)
  }, [setAboutRef])

  return (
      <Typography ref={aboutRef} sx={{
          fontSize: 22, 
          display: 'flex',
          alignItems: 'center',
          gap: isDesktop ? 1.25 : 2,
          width: isDesktop ? '30%' : '100%',
          mb: 2,
          '&::after': {
            content: '""',
            backgroundColor: theme.palette.primary.main,
            width: '30%',
            height: '1px',
            display: 'block',
            flex: 1
          }
        }}>
          <Box className='highlightedText' component="span">01.</Box> About Me
        </Typography>
  )
}

export default AboutHeading