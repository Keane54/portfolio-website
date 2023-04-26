import { Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { AppContext } from "../../pages"

const ContactText = () => {

    const { isDesktop } = useContext(AppContext)

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
            textAlign: 'center', 
            mb: 4,
            width: '100%',
            transition: 'opacity 500ms ease-in-out, transform 800ms ease-in-out',
            opacity: madeVisible ? 1 : 0,
            transform: madeVisible ? 'translateY(0)' : 'translateY(10%)'
          }}>
            I&apos;m not currently looking for new opportunities, but my inbox is always open.
            If you have any questions or even just want to say hello, send me an email
            or message me on LinkedIn and I&apos;ll do my best to reply!
        </Typography>
    )
}

export default ContactText