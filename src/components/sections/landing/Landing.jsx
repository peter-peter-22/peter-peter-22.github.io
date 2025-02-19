import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useCallback, useEffect, useRef } from "react";
import { FloatIn } from "../../decorations/animations/FadeIn";
import { TitleButtons } from "./Buttons";
import { Logos } from "./Logos";
import { Description, LandingTitle } from "./Title";

export function Landing() {
    const containerRef = useLandingFadeOut({ area: 200 });
    return (
        <Box sx={{ position: "sticky", top: 0 }}>
            <Container ref={containerRef} sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }} component="section">
                <Stack gap={5} sx={{ maxWidth: "100%", width: "100%" }}>
                    <FloatIn delay={1}>
                        <LandingTitle />
                    </FloatIn>
                    <FloatIn delay={1.5}>
                        <Description />
                    </FloatIn>
                    <Logos delay={2} />
                    <FloatIn delay={3}>
                        <TitleButtons />
                    </FloatIn>
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
    }, [containerRef, area])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            update()
        })
        update()
        return () => { window.removeEventListener("scroll", update) }
    })
    return containerRef
}