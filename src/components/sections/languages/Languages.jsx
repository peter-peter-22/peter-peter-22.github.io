import Container from "@mui/material/Container";
import { Title } from "../../decorations/texts/Title";
import { LanguageEntries } from "./LanguageEntries";

export function Languages() {
    return (
        <Container sx={theme => ({ maxWidth: { xs: theme.breakpoints.values.sm, md: theme.breakpoints.values.lg } })}>
            <Title>
                Environments
            </Title>
            <LanguageEntries />
        </Container>
    )
}