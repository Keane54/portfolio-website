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
            '@media (max-width: 900px)': {
                gridColumn: '1 / -1',
                height: '100%',
                backgroundColor: '#232323',
                cursor: 'pointer'
            },
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
                },
                '@media (max-width: 900px)': {
                    opacity: 0.25,
                    height: '100%',
                    width: 'auto',
                    filter: 'grayscale(100%) contrast(1) brightness(20%)',
                    '&:hover': {
                        opacity: 0.5,
                        transform: 'scale(1.05)',
                        filter: 'grayscale(0%) contrast(1) brightness(20%)'
                    }
                }
            },
            '& a': {
                width: '100%',
                height: '100%'
            }
        }}>
            <a href={href} target="_blank" rel="noreferrer">
                <img src={src} alt=""/>
            </a>
        </Box>
    )
}

export default ProjectImage