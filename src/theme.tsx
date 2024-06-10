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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});

export default responsiveFontSizes(theme);
