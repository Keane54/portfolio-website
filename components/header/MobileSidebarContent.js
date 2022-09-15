import { Box } from "@mui/system"
import { Typography, Stack } from "@mui/material"
import { useTheme } from "@emotion/react"
import { createRef, useContext, useEffect } from "react"
import { AppContext } from "../../pages"

const MobileSidebarContent = () => {

    const theme = useTheme()

    const {scrollOnClick, refs} = useContext(AppContext)

    return (
        <Box sx={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}>
            <Stack gap={3} sx={{
                textAlign: 'center',
                '& .MuiBox-root': {
                '@media (max-width: 900px)': {
                    display: 'block'
                }
            }}}>
                <Typography onClick={() => scrollOnClick(refs['01'])}>
                    <Box component="span">01.</Box> About
                </Typography>
                <Typography onClick={() => scrollOnClick(refs['02'])}>
                    <Box component="span">02.</Box> Work
                </Typography>
                <Typography>
                    <Box component="span">03.</Box> Contact
                </Typography>
            </Stack>

            <Box sx={{
                '& .iconWidget': {
                    maskSize: 'contain', 
                    width: '20px', 
                    height: '20px', 
                    backgroundColor: theme.palette.primary.main,
                    cursor: 'pointer',
                    transition: 'all 200ms ease-in-out'
                }, '& .iconWidget:hover': {
                    transform: 'scale(1.15) translateY(-2px)',
                    backgroundColor: theme.palette.secondary.main
                }, '& > .emailAddress': {
                    fontSize: 16,
                    cursor: 'pointer',
                    transition: 'all 200ms ease-in-out'
                }, '& > .emailAddress:hover': {
                    transform: 'scale(1.05)',
                    color: theme.palette.primary.main
                }
            }}>
                <Typography className="emailAddress" sx={{mb: 2}}>
                    <a href="mailto:ollyfudgey5@gmail.com" target='_blank' rel="noreferrer"
                    style={{
                            textDecoration: 'none', 
                            color: 'inherit'
                        }}>
                        ollyfudgey5@gmail.com
                    </a>
                </Typography>

                <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>

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
            </Box>
        </Box>
    )
}

export default MobileSidebarContent