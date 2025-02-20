import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

export const FixedGradientPaper = styled(Paper)(({ theme }) => ({
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.analogous1.main}, ${theme.palette.primary.main}, ${theme.palette.analogous2.main})`,
    backgroundAttachment: "fixed",
}))

export function FixedGradientPaperOutline({ children, ...props }) {
    return (
        <FixedGradientPaper {...props}>
            <Paper
                sx={{
                    backgroundClip: "padding-box",
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "transparent",
                    height: "100%",
                }}
            >
                {children}
            </Paper>
        </FixedGradientPaper>
    )
}

export function GradientPaperOutline({ children, sx, ...props }) {
    return (
        <FixedGradientPaper sx={{ backgroundAttachment: "unset", ...sx }} {...props}>
            <Paper
                sx={{
                    backgroundClip: "padding-box",
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "transparent",
                    height: "100%",
                }}
            >
                {children}
            </Paper>
        </FixedGradientPaper>
    )
}