import Typography from "@mui/material/Typography";
import { GradientUnderline } from "./GradientUnderline";

export function Title({ children }) {
    return (
        <Typography variant="h2" textAlign={"center"} sx={{ mb: 10, position: "relative" }}>
            {children}
            <GradientUnderline />
        </Typography>
    )
}