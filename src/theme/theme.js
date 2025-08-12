import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: { main: "#011640"},
        secondary:  {main: "#ffda00"},
        warning: { main: "#d71920"},
        accent: { main: "#18C9CD"},
        text: {
            primary: '#7ba696',
            secondary: 'rgb(253, 253, 253)',
            accent: '#18C9CD',
            light: '#ffda00'
        }
    }
})
export default theme