import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(createTheme({

    //palette

    palette: {
        mode: 'dark',
        primary: {
            main: "#455cff"
        },
        secondary: {
            main: "#555555"
        },
        analogous1: {
            main: "#cb30fd",
        },
        analogous2: {
            main: "#00adff",
        },
        triadic1: {
            main: "#c600ff",
        },
        triadic2: {
            main: "#00ff95",
        }
    },

    //typography

    typography: {
        h1: {
            fontSize: "3.5rem",
            fontWeight: "bold"
        },
        h2: {
            fontSize: "3.0rem",
            fontWeight: "bold"
        },
        h3: {
            fontSize: "2.5rem",
            fontWeight: "bold"
        },
        h4: {
            fontSize: "2.0rem",
            fontWeight: "bold"
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: "bold"
        },
        h6: {
            fontSize: "1rem",
            fontWeight: "bold"
        }
    },


    //shadows

    shadows: ["none"],
}))