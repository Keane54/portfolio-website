import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useEffect, useState } from "react"

const ProjectDesc = ({ desc }) => {
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
        <Box ref={containerRef} sx={{
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '5px',
            p: 2,
            mb: 2,
            color: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
            position: 'relative',
            '@media (max-width: 900px)': {
                backgroundColor: 'transparent',
                p: 0,
                boxShadow: 'none'
            }
        }}>
            <Typography>
                {desc}
            </Typography>
        </Box>
    )
}

export default ProjectDesc