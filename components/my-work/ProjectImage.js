/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"

const ProjectImage = ({ src, href, imgLeft }) => {
    const theme = useTheme()

    return (
        <Box className="projectImage" sx={{
            gridColumn: imgLeft ? '1 / 8' : '6 / 13',
            gridRow: '1 / 2',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
            filter: 'grayscale(50%) contrast(1) brightness(40%)',
            backgroundColor: 'black',
            borderRadius: '5px',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 200ms ease-in-out',
            '@media (max-width: 900px)': {
                gridColumn: '1 / -1',
                filter: 'grayscale(50%) contrast(1) brightness(40%)',
                height: '100%',
                backgroundColor: '#232323',
                cursor: 'pointer',
            },
            '&:hover': {
                filter: 'grayscale(10%) contrast(1) brightness(40%)',
            },
            '& img': {
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '5px',
                display: 'block',
                opacity: 0.8,
                transition: 'all 200ms ease-in-out',
                '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.03)',
                },
                '@media (max-width: 900px)': {
                    opacity: 0.2,
                    height: '100%',
                    width: 'auto',
                    '&:hover': {
                        opacity: 0.2,
                        transform: 'scale(1.05)',
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