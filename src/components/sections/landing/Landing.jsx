import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TitleButtons } from "./Buttons";
import { Description, Title } from "./Title";
import { Logos } from "./Logos";
import { LightBackground, lightBackgrounds } from "../../decorations/backgrounds/LightBackground";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";

export function Landing() {
    const containerRef = useLandingFadeOut({ area: 100 });
    return (
        <Box sx={{ position: "relative", position: "sticky", top: 0, zIndex: -1 }}>
            <LightBackground background={lightBackgrounds.landing} />
            <Container ref={containerRef} sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
                <Stack spacing={5}>
                    <Title />
                    <Description />
                    <Logos />
                    <TitleButtons />
                </Stack>
            </Container>
        </Box>
    )
}

function useLandingFadeOut({ area }) {
    const containerRef = useRef()

    const update = useCallback(() => {
        if (!containerRef.current)
            return
        const scrollY = window.scrollY
        let opacity = (area - scrollY) / area
        opacity = Math.max(Math.min(opacity, 1), 0)
        containerRef.current.style.opacity = opacity;
    },[containerRef])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            update()
        })
        update()
        return ()=>{window.removeEventListener("scroll",update)}
    })
    return containerRef
}