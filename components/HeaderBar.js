import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'

const HeaderBar = ( { palette } ) => {
    return (
        <AppBar elevation={0} sx={{background: 'white', color:'black', position: 'static'}}>
            <Container>

            <Toolbar sx={{justifyContent: 'space-between'}} disableGutters>

                <Image  src="/squidlogo.svg" width={32} height={32}
                alt="A pink squid standing upright in the top left corner of the header."/>

                <Box sx={{
                    display: 'flex', 
                    gap: 5, 
                    "& .MuiTypography-root": {
                        fontSize: '1.2rem',
                        "& .MuiBox-root": {
                            color: palette.primary.main
                        }
                    }
                }}>

                    <Typography>
                        <Box component="span">01</Box>. About
                    </Typography>
                    <Typography>
                        <Box component="span">02</Box>. Work
                    </Typography>
                    <Typography>
                        <Box component="span">03</Box>. Contact
                    </Typography>

                </Box>

            </Toolbar>

            </Container>
        </AppBar>
    )
}

export default HeaderBar