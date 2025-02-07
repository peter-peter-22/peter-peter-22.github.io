import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(createTheme({

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

theme.components = {
    MuiIconButton: {
        styleOverrides: {
            root: {
                transition: theme.transitions.create("all", {
                    duration: theme.transitions.duration.standard,
                }),
            },
        },
    },
    MuiFab: {
        styleOverrides: {
            root: {
                transition: theme.transitions.create("all", {
                    duration: theme.transitions.duration.standard,
                }),
            },
        },
    },
    MuiButtonBase: {
        styleOverrides: {
            root: {
                boxShadow: `transparent 0 0 0 0`,
                "&:hover": {
                    boxShadow: `${theme.palette.text.primary} 0 0 0 3px`,
                    transform: "translateY(-5px)"
                },
            },
        },
    },

}

export { theme };