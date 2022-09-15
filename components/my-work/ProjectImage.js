/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/system"

const ProjectImage = ({ src, imgLeft }) => {
    return (
        <Box sx={{
            gridColumn: imgLeft ? '1 / 8' : '6 / 13',
            gridRow: '1 / 2',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
            zIndex: '-1',
            height: '100%',
            alignItems: 'center',
            '& img': {
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '5px',
                display: 'block'
            }
        }}>
            <img src={src} alt=""/>
        </Box>
    )
}

export default ProjectImage