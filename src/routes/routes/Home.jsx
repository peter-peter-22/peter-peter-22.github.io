import { AboutMe } from "../../components/sections/about me/AboutMe";
import { Landing } from "../../components/sections/landing/Landing";
import { Languages } from "../../components/sections/languages/Languages";
import { WhatCanIDo } from "../../components/sections/what can I do/WhatCanIDo";

export function Home() {
    return (
        <>
            <Landing />
            <AboutMe />
            <Languages />
            <WhatCanIDo />
        </>
    )
}