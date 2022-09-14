import { Typography, Box } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../pages"

const DesktopMenu = () => {

    const { scrollOnClick, refs: { about: { aboutRef } } } = useContext(AppContext)

    return (
        <>
            <Typography onClick={() => {scrollOnClick(aboutRef)}}>
                <Box component="span">01.</Box> About
            </Typography>
            <Typography>
                <Box component="span">02.</Box> Work
            </Typography>
            <Typography>
                <Box component="span">03.</Box> Contact
            </Typography>
        </>
    )
}

export default DesktopMenu