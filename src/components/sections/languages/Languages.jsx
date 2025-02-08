import Container from "@mui/material/Container";
import { LightsCard, LightsPaper } from "../../decorations/blocks/LightsBlock";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CodeIcon from '@mui/icons-material/Code';
import { LanguageEntries } from "./LanguageEntries";

export function Languages() {
    return (
        <Container maxWidth="sm">
            <Card sx={{ p: 2, position: "relative" }}>
                <Typography variant="h2" textAlign={"center"}>
                    Environments
                </Typography>
            </Card>
            <LanguageEntries />
        </Container>
    )
}