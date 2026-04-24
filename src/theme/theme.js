import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#BF9B7A',       // parchment — your primary interactive color
        light: '#D4B896',
        dark: '#A07D5E',
        contrastText: '#0C0906',
        },
        secondary:  {main: "#BF9B7A"},
        warning: { main: "#A84430"},
        accent: { main: "#CD7F18"},
        background: {
            default: "#0c0906",
            paper: "#1c1510",
            elevated: '#261C14'
        },
        text: {
            primary: '#F5ECD9',
            secondary: '#A89070',
            disabled: '#5C4E3E',
            accent: '#BF9B7A',
            gold: '#CD7F18',   
        },
    },
    typography: {
            fontFamily: '"Elms Sans", sans-serif',

        h1: {
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 300,
            fontSize: '3.5rem',
            letterSpacing: '0.02em',
            color: '#F5ECD9',
        },
        h2: {
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            fontSize: '2.25rem',
            letterSpacing: '0.02em',
        },
        h3: {
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            fontSize: '1.5rem',
            letterSpacing: '0.02em',
        },
        h4: {
            fontFamily: '"Elms Sans", sans-serif',
            fontWeight: 500,
            fontSize: '1.15rem',
            letterSpacing: '0.04em',
        },
        h6: {
            fontFamily: '"Elms Sans", sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            letterSpacing: '0.02em',
        },
        overline: {
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#A89070',
        },
        body1: {
            fontFamily: '"Elms Sans", sans-serif',
            fontWeight: 500,
            fontSize: '1.15rem',
            lineHeight: 1.75,
            color: '#ffe6c5',
        },
        body2: {
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 300,
            fontSize: '0.875rem',
            lineHeight: 1.65,
            color: '#A89070',
        },
    }
})
export default theme