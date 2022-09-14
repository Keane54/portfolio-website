import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"

const ProjectLinks = ( { links, imgLeft }) => {
    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex', 
            justifyContent: imgLeft ? 'flex-end' : 'flex-start',
            gap: 2.5,
            '& a': {
                display: 'block',
                textDecoration: 'none',
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
                                maskSize: 'contain',
                                transition: 'all 200ms ease-in-out',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.light,
                                    transform: 'scale(1.12)'
                                }
                            }} key={url}>
                                <a href={url} target="_blank" rel="noreferrer"
                                style={{height: '24px', width: '24px', display: 'block'}}></a>
                            </Box>
                        )
                    })
                )
            })}
        </Box>
    )
}

export default ProjectLinks