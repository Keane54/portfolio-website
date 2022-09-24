import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const Technologies = ({ technologies, imgLeft }) => {

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
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)',
            display: 'flex', 
            gap: 2, 
            color: '#7e7e7e', 
            justifyContent: imgLeft ? 'flex-end' : 'flex-start',
            mb: 2,
            '@media (max-width: 900px)': {
                justifyContent: 'flex-start',
                color: 'white',
                fontWeight: 500
            }
        }}>
                {technologies.map(tech => {
                    return (
                        <Typography sx={{fontWeight: 400}} key={tech}>
                            {tech}
                        </Typography>
                    )
                })}
        </Box>
    )
}

export default Technologies