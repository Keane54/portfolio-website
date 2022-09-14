import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"
import { useContext } from "react"
import { AppContext } from "../../pages"

const BurgerButton = () => {
    const theme = useTheme()

    const {open, setOpen} = useContext(AppContext)

    return (
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
    )
}

export default BurgerButton