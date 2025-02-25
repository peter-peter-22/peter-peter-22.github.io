import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from '@mui/material/styles';
import { LightBackground, } from "../components/decorations/backgrounds/LightBackground";
import { AboutMe } from "../components/sections/about me/AboutMe";
import { Landing } from "../components/sections/landing/Landing";
import { Languages } from "../components/sections/languages/Languages";
import { Projects } from "../components/sections/projects/Projects";
import { WhatCanIDo } from "../components/sections/what can I do/WhatCanIDo";
import { Footer } from "../components/sections/footer/Footer";
import { BlackBackground } from "../components/decorations/blocks/BlackBackground";
import { Contact } from "../components/sections/contact/Contact";
import { lightBackgrounds } from "../components/decorations/backgrounds/lightBackgrounds";

export function Home() {
    const theme = useTheme();
    return (
        <>
            <Background />
            <Landing />
            <BlackBackground start transition={100} color={theme.palette.background.default}>
                <Stack gap={{ xs: 10, sm: 15, md: 20 }} sx={{ position: "relative", zIndex: 1 }}>
                    <AboutMe />
                    <Languages />
                    <WhatCanIDo />
                    <Projects />
                    <Contact />
                    <Footer />
                </Stack>
            </BlackBackground>
        </>
    )
}

function Background() {
    return (
        <Box sx={{ position: "fixed", height: "100vh", width: "100%", zIndex: -1, bgcolor: "common.black" }}>
            <LightBackground background={lightBackgrounds.landing} />
        </Box>
    )
}