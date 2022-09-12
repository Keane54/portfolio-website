import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"


const FixedWidgets = ( { theme } ) => {

    // Spread styles into sx prop to avoid repetition.
    const sharedStyles = {
        display: 'flex', 
        gap: 1.5,
        justifyContent: 'center', 
        alignItems: 'center', 
        writingMode: 'vertical-rl',
        position: 'fixed',
        bottom: 0,
        '@media (max-width: 900px)': {
            display: 'none'
        },
        '&::after': {
            display: 'block',
            content: '""',
            width: '1px',
            height: '90px',
            backgroundColor: 'black'
        }, '& .iconWidget': {
            maskSize: 'contain', 
            width: '20px', 
            height: '20px', 
            backgroundColor: 'black',
            cursor: 'pointer',
            transition: 'all 200ms ease-in-out'
        }, '& .emailWidget': {
            cursor: 'pointer',
            transition: 'all 200ms ease-in-out'
        }, '& .iconWidget:hover': {
            transform: 'scale(1.15) translateY(-2px)',
            backgroundColor: theme.palette.primary.main
        }, '& .emailWidget:hover': {
            transform: 'translateY(-5px)',
            color: theme.palette.primary.main
        }
    }

    return (
        <>
            <Box sx={{...sharedStyles, left: 50}}>
                <Box className="iconWidget" sx={{mask: 'url(/githubmark.svg) no-repeat center'}}/>
                <Box className="iconWidget" sx={{mask: 'url(/instagram.svg) no-repeat center'}}/>
                <Box className="iconWidget" sx={{mask: 'url(/linkedin.svg) no-repeat center'}}/>
            </Box>
            <Box sx={{...sharedStyles, right: 50}}>
                <Typography className="emailWidget">ollyfudgey5@gmail.com</Typography>
            </Box>
        </>
    )
}

export default FixedWidgets