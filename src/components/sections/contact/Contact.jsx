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

export function Contact() {
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        const url = createEmailUrl({ title: "Response to your portfolio", body: formValues.text })
        window.open(url, "_blank");
    }
    return (
        <Container maxWidth="sm" component="section" id="contact">
            <Title>
                Contact
            </Title>
            <LightCard>
                <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                        Send me an email
                    </Typography>
                    <Card component="form" onSubmit={onSubmit}>
                        <CardContent>
                            <TextField label="Email text" variant="standard" autoComplete="off" fullWidth name="text" />
                        </CardContent>
                        <CardActions>
                            <Fab variant="extended" size="small" color="primary" type="submit">
                                send
                            </Fab>
                        </CardActions>
                    </Card>
                </CardContent>
            </LightCard>
        </Container>
    )
}