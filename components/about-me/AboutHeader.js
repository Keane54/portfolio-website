import { Typography, Box } from "@mui/material"

const AboutHeader = () => {
    return (
        <Typography sx={{
            fontSize: 22, 
            display: 'flex',
            alignItems: 'center',
            gap: isDesktop ? 1.25 : 2,
            width: isDesktop ? '30%' : '100%',
            mb: 2,
            '&::after': {
              content: '""',
              backgroundColor: theme.palette.primary.main,
              width: '30%',
              height: '1px',
              display: 'block',
              flex: 1
            }
          }}>
            <Box className='highlightedText' component="span">01.</Box> About Me
          </Typography>
    )
}

export default AboutHeader