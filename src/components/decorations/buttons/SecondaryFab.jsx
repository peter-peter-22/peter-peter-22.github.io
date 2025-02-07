import Fab from "@mui/material/Fab";
import { useTheme } from '@mui/material/styles';

export function SecondaryFab({ sx, children, ...props }) {
    const theme = useTheme();
    return (
        <Fab
            color="secondary"
            sx={{
                backgroundColor: "transparent",
                borderColor: theme.palette.secondary.main,
                borderWidth: 3,
                borderStyle: "solid",
                "&:hover": {
                    borderColor: theme.palette.secondary.light,
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Fab>
    )
}