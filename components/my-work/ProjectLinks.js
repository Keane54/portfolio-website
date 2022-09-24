import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useEffect, useState } from "react"

const ProjectLinks = ( { links, imgLeft }) => {
    const theme = useTheme()

    const keys = Object.keys(links)

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
            display: 'flex', 
            justifyContent: imgLeft ? 'flex-end' : 'flex-start',
            gap: 2.5,
            '@media (max-width: 900px)': {
                justifyContent: 'flex-start'
            },
            '& a': {
                display: 'block',
                textDecoration: 'none',
            }
        }}>

            {/* We use the keys from the { links } object and map over them to return the correct widget & link. */}
            {
                keys.map(key => {

                    const { widget, url } = links[key]

                    return (
                        <Box sx={{
                            mask: `url(${widget}) no-repeat center`,
                            backgroundColor: theme.palette.primary.main,
                            maskSize: 'contain',
                            transition: 'all 200ms ease-in-out',
                            position: 'relative',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                                transform: 'scale(1.12)',
                                '@media (max-width: 900px)': {
                                    backgroundColor: theme.palette.secondary.light,
                                }
                            }
                        }} key={url}>
                            <a href={url} target="_blank" rel="noreferrer"
                            style={{height: '24px', width: '24px', display: 'block'}}></a>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default ProjectLinks