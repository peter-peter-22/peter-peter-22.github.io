import Fab from "@mui/material/Fab";
import { useTheme } from '@mui/material/styles';

export function GradientFab({ sx, children, ...props }) {
    const theme = useTheme();
    return (
        <Fab
            color="primary"
            sx={{
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.analogous1.main}, ${theme.palette.analogous2.main})`,
                boxShadow: `transparent 0 0 0 0`,
                color: "theme.palette.text.primary",
                "&:hover": {
                    boxShadow: `${theme.palette.text.primary} 0 0 0 3px`,
                    transform: "translateY(-5px)"
                },
                transition: theme.transitions.create("all", {
                    duration: theme.transitions.duration.standard,
                }),
                ...sx
            }}
            {...props}
        >
            {children}
        </Fab>
    )
}