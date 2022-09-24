import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useState, useEffect } from "react"


const ProjectTitle = ( { projectTitle, href } ) => {

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
        <Typography ref={containerRef} sx={{
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)',
            fontSize: 28,
            fontWeight: 500,
            mb: 1.8,
            '@media (max-width: 900px)': {
                mb: 1.2
            },
            '& a': {
                textDecoration: 'none',
                cursor: 'pointer',
                color: theme.palette.primary.main,
                transition: 'all 200ms ease-in-out',
                display: 'inline-block',
                '&:hover': {
                    transform: 'scale(1.05)',
                    color: theme.palette.secondary.main
                },
                '@media (max-width: 900px)': {
                    width: '100%',
                    '&:hover': {
                        transform: 'none',
                        color: theme.palette.secondary.light
                    }
                }
            }
        }}>
            <a href={href} target="_blank" rel="noreferrer">{projectTitle}</a>
        </Typography>
    )
}

export default ProjectTitle