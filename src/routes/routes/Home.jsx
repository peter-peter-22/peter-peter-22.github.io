import { AboutMe } from "../../components/sections/about me/AboutMe";
import { Landing } from "../../components/sections/landing/Landing";
import { Languages } from "../../components/sections/languages/Languages";
import { WhatCanIDo } from "../../components/sections/what can I do/WhatCanIDo";
import Stack from "@mui/material/Stack";
import { lightBackgrounds, LightBackground } from "../../components/decorations/backgrounds/LightBackground";
import Box from "@mui/material/Box";
import { Projects } from "../../components/sections/projects/Projects";

export function Home() {
    return (
        <>
            <Background />
            <Landing />
            <Stack gap={{ xs: 10, sm: 15, md: 20 }} sx={{ position: "relative", zIndex: 1 }}>
                <AboutMe />
                <Languages />
                <WhatCanIDo />
                <Projects />
            </Stack>
        </>
    )
}

function Background() {
    return (
        <Box sx={{ position: "fixed", height: "100%", width: "100%", zIndex: -1 }}>
            <LightBackground background={lightBackgrounds.landing} />
        </Box>
    )
}