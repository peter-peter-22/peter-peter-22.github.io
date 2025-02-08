import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { TitleButtons } from "./Buttons";
import { Description, Title } from "./Title";
import { Logos } from "./Logos";

export function Landing() {
    return (
        <Container sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
            <Stack spacing={5}>
                <Title />
                <Description />
                <Logos />
                <TitleButtons />
            </Stack>
        </Container>
    )
}