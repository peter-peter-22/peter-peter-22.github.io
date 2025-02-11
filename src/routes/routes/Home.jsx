import { AboutMe } from "../../components/sections/about me/AboutMe";
import { Landing } from "../../components/sections/landing/Landing";
import { Languages } from "../../components/sections/languages/Languages";
import { WhatCanIDo } from "../../components/sections/what can I do/WhatCanIDo";
import Stack from "@mui/material/Stack";

export function Home() {
    return (
        <>
            <Landing />
            <Stack gap={20}>
                <AboutMe />
                <Languages />
                <WhatCanIDo />
            </Stack>
        </>
    )
}