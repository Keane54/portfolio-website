/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import ProjectDesc from "./ProjectDesc"
import ProjectImage from "./ProjectImage"
import ProjectLinks from "./ProjectLinks"
import ProjectTitle from "./ProjectTitle"
import Technologies from "./Technologies"

const Featured = ( { props, imgLeft }) => {

    const {title, href, desc, technologies, img, links} = props

    return (
        <Box sx={{
            position: 'relative', 
            width: '100%',
            display: imgLeft ? 'block' : 'flex',
            justifyContent: "flex-end",
            mb: 20
        }}>

            <ProjectImage src={img} />

            <Box sx={{
                position: 'absolute', 
                right: imgLeft ? '0px' : '100%', 
                top: 0,
                textAlign: imgLeft ? 'right' : 'left',
                width: '40vw',
                top: '50%',
                transform: imgLeft ? 'translateY(-50%)' : 'translateY(-50%) translateX(100%)'
            }}>
                <Box>
                    <Typography sx={{color: '#7e7e7e', fontSize: 18}}>
                        Featured Project
                    </Typography>
                    <ProjectTitle projectTitle={title} href={href}/>

                    <ProjectDesc desc={desc}/>

                    <Technologies technologies={technologies} imgLeft={imgLeft}/>

                    <ProjectLinks links={links} imgLeft={imgLeft}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Featured