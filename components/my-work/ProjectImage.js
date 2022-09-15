/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/system"

const ProjectImage = ({ src, imgLeft }) => {
    return (
        <Box sx={{
            gridColumn: imgLeft ? '1 / 7' : '6 / 12',
            gridRow: '1 / 2',
            borderRadius: '5px',
            overflow: 'hidden',
            display: 'block',
            position: 'relative',
            zIndex: '-1',
            '& img': {
                objectFit: 'cover',
                height: '100%',
                position: 'absolute',
                width: '100%'
            }
        }}>
            <Box>
                <img src={src} alt=""/>
            </Box>
        </Box>
    )
}

export default ProjectImage