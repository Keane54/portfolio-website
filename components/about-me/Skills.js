import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useState, useEffect } from "react"

const Skills = () => {

    const theme = useTheme()

    const [containerRef, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.6
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
            '& ul': {
                listStyleType: 'none',
                padding: '0',
                display: "grid",
                gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                gap: "0 1",
            },
            '& li': {
                position: 'relative',
                pl: 2.5,
                '&::before': {
                    content: '"▹"',
                    color: theme.palette.secondary.main,
                    position: 'absolute',
                    left: 0
                }
            }
        }}>
            <ul>
                <li>JavaScript (ES6+)</li>
                <li>NextJS</li>
                <li>React</li>
                <li>MaterialUI</li>
            </ul>
        </Box>
    )
}

export default Skills