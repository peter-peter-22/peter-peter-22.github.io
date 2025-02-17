import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import { GradientText } from "../../decorations/texts/GradientText";

export function LandingTitle() {
    const theme = useTheme();
    return (
        <Typography variant="h1">
            <div>
                Hello, my name is Peter.
            </div>
            <div>
                I am a <GradientText
                    direction={"45deg"}
                    startColor={theme.palette.analogous1.main}
                    middleColor={theme.palette.primary.main}
                    endColor={theme.palette.analogous2.main}
                >
                    Full-stack
                </GradientText> web-developer.
            </div>
        </Typography>
    )
}

export function Description() {
    return (
        <Typography variant="h4" component="h2" fontWeight={"light"} color="textSecondary">
            I create interactive, stylized, optimized and scalable websites for various purposes.
        </Typography>
    )
}