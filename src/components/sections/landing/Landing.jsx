import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { TitleButtons } from "./Buttons";
import { Description, Title } from "./Title";
import { Logos } from "./Logos";
import { LightBackground, lightBackgrounds } from "../../decorations/backgrounds/LightBackground";

export function Landing() {
    return (
        <Container sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
            <LightBackground background={lightBackgrounds.landing} sx={{opacity:0}}/>
            <Stack spacing={5}>
                <Title />
                <Description />
                <Logos />
                <TitleButtons />
            </Stack>
        </Container>
    )
}

function useLandingFadeOut(){
    
}