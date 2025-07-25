import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: { main: "#006aff"},
        secondary:  {main: "#ffda00"},
        warning: { main: "#d71920"},
        text: {
            primary: '#7ba696',
            secondary: 'rgb(253, 253, 253)',
            accent: '#18C9CD',
        }
    }
})
export default theme