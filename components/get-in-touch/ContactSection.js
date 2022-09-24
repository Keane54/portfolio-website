import { Stack } from "@mui/system"
import { Typography } from "@mui/material"
import ContactText from "./ContactText"
import { useEffect, useState } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import ContactButton from "./ContactButton"
import { useTheme } from "@emotion/react"

const ContactSection = () => {

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
        <Stack ref={containerRef} sx={{
            alignItems: 'center',
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)'
        }}>
            <Typography sx={{fontWeight: 600, fontSize: 50, color: theme.palette.primary.main}}>
                Get In Touch
            </Typography>

            <ContactText/>

            <ContactButton/>
        </Stack>
    )
}

export default ContactSection