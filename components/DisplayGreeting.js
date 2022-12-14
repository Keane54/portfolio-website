import { Box } from "@mui/material"
import { useEffect, useState } from "react"


const DisplayGreeting = () => {

    const getTime = () => {
        const currentDate = new Date()
        const currentHours = currentDate.getHours()

        if (currentHours >= 0 && currentHours < 12) {
            return setGreeting("Morning")
        }
        else if (currentHours >= 12 && currentHours < 18) {
            return setGreeting("Afternoon")
        }
        else if (currentHours >= 18) {
            return setGreeting("Evening")
        }
    }

    const [greeting, setGreeting] = useState()

    useEffect(() => {
        getTime()
    }, [])

    return <Box className='highlightedText' component="span"> {greeting} </Box>
}

export default DisplayGreeting