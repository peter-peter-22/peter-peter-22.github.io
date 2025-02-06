import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { TitleButtons } from "./Buttons";
import { Description, Title } from "./Title";

export function Landing() {
    return (
        <Container maxWidth="md">
            <Stack spacing={5} sx={{ my: 10 }}>
                <Title />
                <Description />
                <TitleButtons />
            </Stack>
        </Container>
    )
}