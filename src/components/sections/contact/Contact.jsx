import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { LightCard } from "../../decorations/blocks/LightsBlock";
import { Title } from "../../decorations/texts/Title";
import { createEmailUrl } from "../../functional/emailLinkGenerator";
import { useTranslation } from "react-i18next";

export function Contact() {
    const { t } = useTranslation()
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        const url = createEmailUrl({ title: t("contact.email-title"), body: formValues.text })
        window.open(url, "_blank");
    }
    return (
        <Container maxWidth="sm" component="section" id="contact">
            <Title>
                {t("contact.title")}
            </Title>
            <LightCard>
                <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                        {t("contact.title2")}
                    </Typography>
                    <Card component="form" onSubmit={onSubmit}>
                        <CardContent>
                            <TextField label={t("contact.placeholder")} variant="standard" autoComplete="off" fullWidth name="text" />
                        </CardContent>
                        <CardActions>
                            <Fab variant="extended" size="small" color="primary" type="submit">
                                {t("contact.send")}
                            </Fab>
                        </CardActions>
                    </Card>
                </CardContent>
            </LightCard>
        </Container>
    )
}