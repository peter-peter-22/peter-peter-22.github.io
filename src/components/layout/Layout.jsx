import Box from "@mui/material/Box";
import { Header } from "./Header";
import { LoadingSceen } from "./Loading";

export function Layout({ children }) {
    return (
        <LoadingSceen >
            <Header />
            <Box component="main">
                {children}
            </Box>
        </LoadingSceen>
    )
}