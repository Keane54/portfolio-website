import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material"


const ProjectTitle = ( { projectTitle, href } ) => {
    const theme = useTheme()

    return (
        <Typography sx={{
            fontSize: 28,
            fontWeight: 500,
            mb: 1.8,
            '& a': {
                textDecoration: 'none',
                cursor: 'pointer',
                color: theme.palette.primary.main,
                transition: 'all 200ms ease-in-out',
                display: 'inline-block',
                '&:hover': {
                    transform: 'scale(1.05)',
                    color: theme.palette.primary.light
                }
            }
        }}>
            <a href={href}>{projectTitle}</a>
        </Typography>
    )
}

export default ProjectTitle