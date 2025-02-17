import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Title } from "../../decorations/texts/Title";
import { LightCard } from "../../decorations/blocks/LightsBlock";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import Fab from "@mui/material/Fab";
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