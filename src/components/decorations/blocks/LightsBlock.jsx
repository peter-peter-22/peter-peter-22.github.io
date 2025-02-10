import Paper from "@mui/material/Paper";
import { LightBackground, lightBackgrounds } from "../backgrounds/LightBackground";

export function LightPaper({ sx, children }) {
    return (
        <Paper sx={{ position: "relative", overflow: "hidden", ...sx }}>
            <LightBackground background={lightBackgrounds.medium} />
            {children}
        </Paper>
    )
}

export function LightCard({ sx, children }) {
    return (
        <Paper sx={{ position: "relative", overflow: "hidden", ...sx }}>
            <LightBackground background={lightBackgrounds.medium} />
            {children}
        </Paper>
    )
}