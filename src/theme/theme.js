import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: { main: "#006aff"},
        secondary:  {main: "#ffda00"},
        warning: { main: "#d71920"},
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
        }
    }
})
export default theme