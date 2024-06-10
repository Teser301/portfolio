import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ebf7eb",
        },
        secondary: {
            main: "#ebf7eb",
        },
    },
    typography: {
        h1: {
            fontSize: "60px",
            fontWeight: "800",
        },
        body1: {
            fontSize: "18px",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    fontSize: 16,
                },
                contained: {},
            },
        },
    },
});

export default responsiveFontSizes(theme);
