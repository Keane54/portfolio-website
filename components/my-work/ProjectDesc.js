import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { useTheme } from "@emotion/react"

const ProjectDesc = ({ desc }) => {
    const theme = useTheme()

    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: '10px',
            p: 2,
            mt: 1,
            mb: 1.25,
            color: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
        }}>
            <Typography>
                {desc}
            </Typography>
        </Box>
    )
}

export default ProjectDesc