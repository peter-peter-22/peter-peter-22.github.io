import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

export const FixedGradientPaper = styled(Paper)(({ theme }) => ({
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.analogous1.dark}, ${theme.palette.primary.dark}, ${theme.palette.analogous2.dark})`,
    backgroundAttachment: "fixed",
}))

export function FixedGradientPaperOutline({children}){
    return (
        <Paper></Paper>
    )
}