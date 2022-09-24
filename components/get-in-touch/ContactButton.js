import { useTheme } from "@emotion/react"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const ContactButton = () => {

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
        <Button ref={containerRef} sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            py: 1.2,
            px: 5.5,
            fontSize: 24,
            textTransform: 'none',
            '& a': {
            textDecoration: 'none',
            color: 'inherit',
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)',
            }
        }}>
            <a href="mailto:ollyfudgey5@gmail.com" target="_blank" rel="noreferrer">
            Say Hello
            </a>
        </Button>
    )
}

export default ContactButton