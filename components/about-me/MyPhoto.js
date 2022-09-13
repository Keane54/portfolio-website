import { Box } from "@mui/system"
import { Avatar } from "@mui/material"

const MyPhoto = ({ isDesktop }) => {
    return (
        <Box sx={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems:'center', flex: 1}}>
            <Avatar src='/me.jpg' sx={{height: isDesktop ? 240 : 180, width: isDesktop ? 240 : 180}} />
        </Box>
    )
}

export default MyPhoto