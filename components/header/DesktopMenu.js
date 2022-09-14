import { Typography, Box } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../pages"

const DesktopMenu = () => {

    const { scrollOnClick, refs, setRefs} = useContext(AppContext)

    return (
        <>
            <Typography onClick={() => {scrollOnClick(refs['01'])}}>
                <Box component="span">01.</Box> About
            </Typography>
            <Typography onClick={() => {scrollOnClick(refs['02'])}}>
                <Box component="span">02.</Box> Work
            </Typography>
            <Typography>
                <Box component="span">03.</Box> Contact
            </Typography>
        </>
    )
}

export default DesktopMenu