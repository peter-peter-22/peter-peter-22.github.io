import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { LanguageEntries } from "./LanguageEntries";

export function Languages() {
    return (
        <Container sx={theme => ({ maxWidth: { xs: theme.breakpoints.values.sm, md: theme.breakpoints.values.lg } })}>
            <Typography variant="h2" textAlign={"center"} sx={{mb:5}}>
                Environments
            </Typography>
            <LanguageEntries />
        </Container>
    )
}