import Fab from "@mui/material/Fab";
import { useTheme } from '@mui/material/styles';

export function GradientFab({ sx, children, ...props }) {
    const theme = useTheme();
    return (
        <Fab
            color="primary"
            sx={{
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.analogous1.main}, ${theme.palette.analogous2.main})`,
                color: "theme.palette.text.primary",
                ...sx
            }}
            {...props}
        >
            {children}
        </Fab>
    )
}