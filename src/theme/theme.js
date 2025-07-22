import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: { main: "#006aff"},
        secondary:  {main: "#ffda00"},
        warning: { main: "#d71920"},
        text: {
            primary: 'rgba(5, 240, 252, 0.87)',
            secondary: 'rgb(253, 253, 253)',
            accent: '#18C9CD',
        }
    }
})
export default theme