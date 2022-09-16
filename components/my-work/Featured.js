/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import ProjectDesc from "./ProjectDesc"
import ProjectImage from "./ProjectImage"
import ProjectLinks from "./ProjectLinks"
import ProjectTitle from "./ProjectTitle"
import Technologies from "./Technologies"

const Featured = ( { props, imgLeft }) => {

    const {title, desc, technologies, img, links} = props

    return (
        <Box className="projectBox" sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            position: 'relative', 
            width: '100%',
            height: 'fit-content',
            alignItems: 'center',
            '@media (max-width: 900px)': {
                mt: 2,
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                borderRadius: '5px'
            }
        }}>

        
            <ProjectImage src={img} href={links.website.url} imgLeft={imgLeft} />

            <Box className="mobileTransitionOut" sx={{
                gridColumn: imgLeft ? '6 / -1' : '1 / 8',
                gridRow: '1 / 2',
                textAlign: imgLeft ? 'right' : 'left',
                '@media (max-width: 900px)': {
                    gridColumn: '2 / 11',
                    position: 'relative',
                    textAlign: 'left',
                    pointerEvents: 'none',
                    py: 3
                }
            }}>
                <Box sx={{'@media (max-width: 900px)': {
                        pointerEvents: 'auto'
                    }}}>
                    <Typography sx={{
                        color: '#7e7e7e', 
                        fontSize: 18,
                        '@media (max-width: 900px)': {
                            fontWeight: 400,
                            color: 'white'
                        }
                    }}>
                        Featured Project
                    </Typography>
                    <ProjectTitle projectTitle={title} href={links.website.url}/>

                    <ProjectDesc desc={desc}/>

                    <Technologies technologies={technologies} imgLeft={imgLeft}/>

                    <ProjectLinks links={links} imgLeft={imgLeft}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Featured