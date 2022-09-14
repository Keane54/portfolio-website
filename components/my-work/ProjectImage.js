/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/system"

const ProjectImage = ({ src }) => {
    return (
        <Box sx={{
            width: '60%',
            borderRadius: '10px',
            overflow: 'hidden',
            '& img': {
                objectFit: 'cover',
                width: '100%',
                display: 'block'
            }
        }}>
            <Box>
                <img src={src} alt=""/>
            </Box>
        </Box>
    )
}

export default ProjectImage