import { Box, Avatar } from "@mui/system"

const MyPhoto = () => {
    return (
        <Box sx={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems:'center', flex: 1}}>
            <Avatar src='/me.jpg' sx={{height: isDesktop ? 240 : 180, width: isDesktop ? 240 : 180}} />
        </Box>
    )
}

export default MyPhoto