import { Typography, Box } from "@mui/material"
import { AppContext } from "/pages"
import { useContext, useEffect, useRef, useState } from "react"
import { useTheme } from "@emotion/react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

const SectionHeading = ({ text, sectionNum }) => {
  
  const {isDesktop, setRefs} = useContext(AppContext)

  const sectionRef = useRef();

  useEffect(() => {
    setRefs(prevRefs => ({
      ...prevRefs,
      [sectionNum]: sectionRef
    }))
  }, [setRefs, sectionNum])

  const theme = useTheme()

  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.35
  })

  const [madeVisible, setMadeVisible] = useState(false)

  useEffect(() => {
      isVisible && !madeVisible ? setMadeVisible(true) : null
  }, [isVisible, madeVisible])

  return (
      // Merge refs
      <Typography ref={el => {sectionRef.current = el; containerRef.current = el}} sx={{
          fontSize: 22, 
          display: 'flex',
          alignItems: 'center',
          gap: isDesktop ? 1.25 : 2,
          width: isDesktop ? 'fit-content': '100%',
          mb: 2,
          pt: 10,
          transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
          opacity: madeVisible ? 1 : 0,
          transform: madeVisible ? 'translateY(0)' : 'translateY(10%)',
          '&::after': {
            content: '""',
            backgroundColor: theme.palette.secondary.main,
            width: '15vw',
            height: '1px',
            display: 'block',
            flex: isDesktop ? 'initial' : 1
          }
        }}>
          <Box className='highlightedText' component="span">{sectionNum}.</Box> {text}
        </Typography>
  )
}

export default SectionHeading