import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

export const FixedGradientPaper = styled(Paper)(({ theme }) => ({
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.analogous1.dark}, ${theme.palette.primary.dark}, ${theme.palette.analogous2.dark})`,
    backgroundAttachment: "fixed",
}))