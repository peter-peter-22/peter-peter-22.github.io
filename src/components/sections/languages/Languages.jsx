import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { LanguageEntries } from "./LanguageEntries";

export function Languages() {
    return (
        <Container sx={theme => ({ maxWidth: { xs: theme.breakpoints.values.sm, md: theme.breakpoints.values.lg } })}>
            <Card sx={{ p: 2, position: "relative" }}>
                <Typography variant="h2" textAlign={"center"}>
                    Environments
                </Typography>
            </Card>
            <LanguageEntries />
        </Container>
    )
}