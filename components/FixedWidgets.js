import { Box, Typography } from "@mui/material"

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
            <Box sx={{...sharedStyles, left: 40}}>
                <Box className="iconWidget" sx={{mask: 'url(/githubmark.svg) no-repeat center'}}>
                    <a href="https://github.com/Keane54" target='_blank' rel="noreferrer" 
                    style={{height: '20px', width: '20px', display: 'block'}}></a>
                </Box>
                <Box className="iconWidget" sx={{mask: 'url(/instagram.svg) no-repeat center'}}>
                    <a href="https://www.instagram.com/ollykeane41/" target='_blank' rel="noreferrer" 
                    style={{height: '20px', width: '20px', display: 'block'}}></a>
                </Box>
                <Box className="iconWidget" sx={{mask: 'url(/linkedin.svg) no-repeat center'}}>
                    <a href="https://www.linkedin.com/in/oliver-k-918673108/" target='_blank' rel="noreferrer" 
                    style={{height: '20px', width: '20px', display: 'block'}}></a>
                </Box>
            </Box>
            <Box sx={{...sharedStyles, right: 40}}>
                <Typography className="emailWidget" >
                        <a href="mailto:ollyfudgey5@gmail.com" target='_blank' rel="noreferrer"
                        style={{
                                textDecoration: 'none', 
                                color: 'inherit'
                            }}>
                            ollyfudgey5@gmail.com
                        </a>
                    </Typography>
            </Box>
        </>
    )
}

export default FixedWidgets