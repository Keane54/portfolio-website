import { Box } from "@mui/system"
import { Typography } from "@mui/material"

const Technologies = ({ technologies, imgLeft }) => {
    return (
        <Box sx={{
            display: 'flex', 
            gap: 2, 
            color: '#7e7e7e', 
            justifyContent: imgLeft ? 'flex-end' : 'flex-start',
            mb: 2
        }}>
                {technologies.map(tech => {
                    return (
                        <Typography key={tech}>
                            {tech}
                        </Typography>
                    )
                })}
        </Box>
    )
}

export default Technologies