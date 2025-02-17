import Box from "@mui/material/Box";

export function Layout({ children }) {
    return (
        <Box component="main">
            {children}
        </Box>
    )
}