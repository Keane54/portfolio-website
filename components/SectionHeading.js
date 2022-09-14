import { Typography, Box } from "@mui/material"
import { AppContext } from "/pages"
import { useContext, useEffect, useRef } from "react"
import { useTheme } from "@emotion/react"

const SectionHeading = ({ text }) => {
  
  const {isDesktop, refs: {about: {aboutRef, setAboutRef}}} = useContext(AppContext)

  const aboutHeading = useRef();

  useEffect(() => {
    setAboutRef(aboutHeading)
  }, [setAboutRef])

  const theme = useTheme()

  return (
      <Typography ref={aboutRef} sx={{
          fontSize: 22, 
          display: 'flex',
          alignItems: 'center',
          gap: isDesktop ? 1.25 : 2,
          width: '100%',
          mb: 2,
          '&::after': {
            content: '""',
            backgroundColor: theme.palette.primary.main,
            width: '15vw',
            height: '1px',
            display: 'block',
            flex: isDesktop ? 'initial' : 1
          }
        }}>
          <Box className='highlightedText' component="span">01.</Box> {text}
        </Typography>
  )
}

export default SectionHeading