import Container from "@mui/material/Container";
import { Title } from "../../decorations/texts/Title";
import { LanguageEntries } from "./LanguageEntries";
import { useTranslation } from "react-i18next";

export function Languages() {
    const {t} = useTranslation();
    return (
        <Container sx={theme => ({ maxWidth: { xs: theme.breakpoints.values.sm, md: theme.breakpoints.values.lg } })} component="section">
            <Title>
                {t("languages.title")}
            </Title>
            <LanguageEntries />
        </Container>
    )
}