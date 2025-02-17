import Paper from "@mui/material/Paper";
import { LightBackground } from "../backgrounds/LightBackground";
import { lightBackgrounds } from "../backgrounds/lightBackgrounds";

export function LightPaper({ sx, children }) {
    return (
        <Paper sx={{ position: "relative", overflow: "hidden", backgroundColor: "unset", ...sx }}>
            <LightBackground background={lightBackgrounds.medium} />
            {children}
        </Paper>
    )
}

export function LightCard({ sx, children }) {
    return (
        <Paper sx={{ position: "relative", overflow: "hidden", backgroundColor: "unset", ...sx }}>
            <LightBackground background={lightBackgrounds.medium} />
            {children}
        </Paper>
    )
}