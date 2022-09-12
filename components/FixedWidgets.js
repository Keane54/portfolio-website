import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"


const FixedWidgets = () => {

    // Spread styles into sx prop to avoid repetition.
    const sharedStyles = {
        display: 'flex', 
        gap: 1.5,
        justifyContent: 'center', 
        alignItems: 'center', 
        writingMode: 'vertical-rl',
        position: 'fixed',
        bottom: 0,
        '&::after': {
            display: 'block',
            content: '""',
            width: '1px',
            height: '90px',
            backgroundColor: 'black'
        },
        '&& > *': {
            cursor: 'pointer'
        }
    }

    return (
        <>
            <Box sx={{...sharedStyles, left: 50}}>
                <Image src='/githubmark.svg' alt='' width='20' height='20'/>
                <Image src='/instagram.svg' alt='' width='20' height='20'/>
                <Image src='/linkedin.svg' alt='' width='20' height='20'/>
            </Box>
            <Box sx={{...sharedStyles, right: 50}}>
                <Typography>ollyfudgey5@gmail.com</Typography>
            </Box>
        </>
    )
}

export default FixedWidgets