import { Box } from "@mui/system"
import { ClickAwayListener } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../pages"
import MobileSidebarContent from "./MobileSidebarContent"
import BurgerButton from "./BurgerButton"

const MobileSidebar = () => {

    const {open, setOpen} = useContext(AppContext)

    return (
        <ClickAwayListener onClickAway={() => open === true ? setOpen(!open) : null}>
            <Box>
                <BurgerButton/>
                
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    transform: open ? 'translateX(0)' : 'translateX(100%)',
                    backgroundColor: 'whitesmoke',
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
                    }
                }}>
                    <MobileSidebarContent/>
                </Box>
            </Box>
        </ClickAwayListener>
    )
}

export default MobileSidebar