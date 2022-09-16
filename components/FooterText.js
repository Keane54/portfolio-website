import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const FooterText = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: `'Roboto Slab', "serif"`,
            flexDirection: 'column',
            gap: 0.5,
            color: '#7E7E7E',
            '& .MuiTypography-root': {
                fontWeight: 400,
                fontSize: 16,
                transition: 'all 200ms ease-in-out',
                opacity: 0.6,
                '&:hover': {
                    color: theme.palette.secondary.main,
                    opacity: 0.9
                },
            },
            '& a': {
                color: 'inherit',
                textDecoration: 'none'
            }
        }}>
            <Typography>
                <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
                    Design by Brittany Chiang
                </a>
            </Typography>
            <Typography>
                <a href="https://github.com/Keane54/portfolio-website" target="_blank" rel="noreferrer">
                    Built &amp; Modified by Oliver Keane
                </a>
            </Typography>
        </Box>
    )
}

export default FooterText