import { Box } from "@mui/system"
import { Avatar } from "@mui/material"
import { useState, useEffect } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const MyPhoto = ({ isDesktop }) => {

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
        <Box ref={containerRef} sx={{
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems:'center', 
            flex: 1,
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)',
        }}>
            <Avatar src='/me.webp' alt="" sx={{height: isDesktop ? 240 : 180, width: isDesktop ? 240 : 180}} />
        </Box>
    )
}

export default MyPhoto