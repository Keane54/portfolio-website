import { Box } from "@mui/system"
import { Typography, Stack } from "@mui/material"
import { useTheme } from "@emotion/react"

const MobileSidebarContent = () => {

    const theme = useTheme()

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
                <Typography>
                    <Box component="span">01.</Box> About
                </Typography>
                <Typography>
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
                }, '& > .emailAddress': {
                    fontSize: 16,
                    cursor: 'pointer',
                    transition: 'all 200ms ease-in-out'
                }, '& > .emailAddress:hover': {
                    transform: 'scale(1.05)',
                    color: theme.palette.primary.main
                }
            }}>
                <Typography className="emailAddress" sx={{mb: 2}}>ollyfudgey5@gmail.com</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Box className="iconWidget" sx={{mask: 'url(/githubmark.svg) no-repeat center'}}/>
                    <Box className="iconWidget" sx={{mask: 'url(/instagram.svg) no-repeat center'}}/>
                    <Box className="iconWidget" sx={{mask: 'url(/linkedin.svg) no-repeat center'}}/>
                </Box>
            </Box>
        </Box>
    )
}

export default MobileSidebarContent