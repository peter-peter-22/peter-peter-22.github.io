import Box from "@mui/material/Box";
import { Header } from "./Header";

export function Layout({ children }) {
    return (
        <>
            <Header />
            <Box component="main">
                {children}
            </Box>
        </>
    )
}