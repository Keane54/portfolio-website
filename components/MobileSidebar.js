import { Box } from "@mui/system"
import { ClickAwayListener } from "@mui/material"
import { useContext } from "react"
import { MenuStatus } from "../pages"
import MobileSidebarContent from "./MobileSidebarContent"
import { useTheme } from "@emotion/react"

const MobileSidebar = () => {

    const theme = useTheme()

    const [open, setOpen] = useContext(MenuStatus)

    return (
        <ClickAwayListener onClickAway={() => open === true ? setOpen(!open) : null}>
            <Box>
                <Box onClick={() => setOpen(!open)} sx={{
                    position: 'relative', 
                    cursor: 'pointer', 
                    padding: 1, 
                    zIndex: 100,
                    transition: 'transform 200ms ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.08)'
                    }
                }}>
                    <Box sx={{
                        width: '30px', 
                        height: '24px', 
                        position: 'relative'
                    }}>
                        <Box sx={{
                            position: 'absolute', 
                            top: '50%', 
                            right: '0px', 
                            width: '30px', 
                            height: '2px',
                            backgroundColor: theme.palette.primary.main,
                            transition: 'all 200ms ease-in-out',
                            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                right: '0px',
                                height: '2px',
                                backgroundColor: theme.palette.primary.main,
                                width: open ? '100%' : '120%',
                                transition: 'width 200ms ease-in-out, top 200ms ease-in-out, transform 200ms ease-in-out',
                                transitionDelay: open ? '0s, 0s, 100ms' : '0s',
                                top: open ? '0px' : '-10px',
                                transform: open ? 'rotate(90deg)' : 'rotate(0deg)'
                            }, '&::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                left: 'auto',
                                right: '0px',
                                height: '2px',
                                backgroundColor: theme.palette.primary.main,
                                transition: 'all 200ms ease-in-out',
                                width: '80%',
                                bottom: open ? '0px' : '-10px'

                            }
                        }}>

                        </Box>
                    </Box>
                </Box>
                
                <Box sx={{
                    position: 'fixed',
                    right: open ? '0' : '-30vw',
                    backgroundColor: 'whitesmoke',
                    top: 0,
                    height: '100vh',
                    width: '30vw',
                    transition: 'all 250ms ease-in-out',
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    boxShadow: open ? 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px' : 'none',
                    '@media (max-width: 600px)': {
                        width: '65vw',
                        right: open ? '0' : '-65vw'
                    }
                }}>
                    <MobileSidebarContent/>
                </Box>
            </Box>
        </ClickAwayListener>
    )
}

export default MobileSidebar