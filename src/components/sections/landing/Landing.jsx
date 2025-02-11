import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useCallback, useEffect, useRef } from "react";
import { TitleButtons } from "./Buttons";
import { Logos } from "./Logos";
import { Description, Title } from "./Title";

export function Landing() {
    const containerRef = useLandingFadeOut({ area: 200 });
    return (
        <Box sx={{ position: "relative", position: "sticky", top: 0 }}>
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
    }, [containerRef])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            update()
        })
        update()
        return () => { window.removeEventListener("scroll", update) }
    })
    return containerRef
}