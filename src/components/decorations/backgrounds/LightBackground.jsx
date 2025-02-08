import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";

const BlurImage = styled("img")({
    width: "100%",
    height: "100%",
    pointerEvents:"none",
    userSelect: "none"
})

export function LightBackground({ background:{blur,url} }) {
    return (
        <BlurContainer>
            <BlurOverlay blur={blur} />
            <BlurImage src={url} draggable={false}/>
        </BlurContainer>
    )
}

function BlurContainer({ children }) {
    return (
        <Box sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
        }}>
            {children}
        </Box>
    )
}

function BlurOverlay({ blur = "40px" }) {
    return (
        <Box sx={{
            backdropFilter: `blur(${blur})`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
        }} />
    )
}

export const lightBackgrounds = {
    medium: { url: "/backgrounds/lights-background.webp", blur: "30px" }
}