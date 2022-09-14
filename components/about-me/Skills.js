import { useTheme } from "@emotion/react"
import { Box } from "@mui/system"

const Skills = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            '& ul': {
                listStyleType: 'none',
                padding: '0',
                display: "grid",
                gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                gap: "0 1"
            },
            '& li': {
                position: 'relative',
                pl: 2.5,
                '&::before': {
                    content: '"▹"',
                    color: theme.palette.primary.main,
                    position: 'absolute',
                    left: 0
                }
            }
        }}>
            <ul>
                <li>JavaScript (ES6+)</li>
                <li>NextJS</li>
                <li>React</li>
                <li>MaterialUI</li>
            </ul>
        </Box>
    )
}

export default Skills