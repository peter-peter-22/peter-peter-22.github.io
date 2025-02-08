import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { LightBackground, lightBackgrounds } from "../backgrounds/LightBackground";

export function LightsPaper({ sx,children }) {
    return (
        <Paper sx={{ position: "relative", overflow: "hidden",...sx }}>
            <LightBackground background={lightBackgrounds.medium} />
            <Box sx={{ position: "relative", zIndex: 1 }}>
                {children}
            </Box>
        </Paper>
    )
}

export function LightsCard({ sx,children }) {
    return (
        <Paper sx={{ position: "relative", overflow: "hidden",...sx }}>
            <LightBackground background={lightBackgrounds.medium} />
            <Box sx={{ position: "relative", zIndex: 1 }}>
                {children}
            </Box>
        </Paper>
    )
}