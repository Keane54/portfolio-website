/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"

const ProjectImage = ({ src, href, imgLeft }) => {
    const theme = useTheme()

    return (
        <Box sx={{
            gridColumn: imgLeft ? '1 / 8' : '6 / 13',
            gridRow: '1 / 2',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '5px',
            alignItems: 'center',
            cursor: 'pointer',
            '& img': {
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '5px',
                display: 'block',
                opacity: 0.6,
                transition: 'all 200ms ease-in-out',
                '&:hover': {
                    opacity: 0.9,
                    transform: 'scale(1.025)'
                }
            }
        }}>
            <a href={href} target="_blank" rel="noreferrer">
                <img src={src} alt=""/>
            </a>
        </Box>
    )
}

export default ProjectImage