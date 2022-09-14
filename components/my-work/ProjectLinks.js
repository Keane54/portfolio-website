import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"

const ProjectLinks = ( { links, imgLeft }) => {
    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex', 
            justifyContent: imgLeft ? 'flex-end' : 'flex-start',
            gap: 2,
            '& a': {
                display: 'block',
                textDecoration: 'none',
                color: theme.palette.primary.main
            }
        }}>

            {/* To access nested the object we need to map over the object, get the keys, and map over them. */}
            {links.map((item) => {

                const keys = Object.keys(item)

                return (
                    keys.map(key => {

                        const { widget, url } = item[key]

                        return (
                            <Box sx={{
                                mask: `url(${widget}) no-repeat center`,
                                backgroundColor: theme.palette.primary.main,
                            }} key={url}>
                                <a href={url} target="_blank" rel="noreferrer"
                                style={{height: '32px', width: '32px', display: 'block'}}></a>
                            </Box>
                        )
                    })
                )
            })}
        </Box>
    )
}

export default ProjectLinks