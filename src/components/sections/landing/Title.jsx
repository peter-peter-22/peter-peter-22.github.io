import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import { GradientText } from "../../decorations/texts/GradientText";
import { useTranslation } from 'react-i18next';

export function LandingTitle() {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Typography variant="h1">
            {t("landing.hello")}
            <div>
                {t("landing.before")} <GradientText
                    direction={"45deg"}
                    startColor={theme.palette.analogous1.main}
                    middleColor={theme.palette.primary.main}
                    endColor={theme.palette.analogous2.main}
                >
                    {t("landing.fullstack")}
                </GradientText> {t("landing.after")}
            </div>
        </Typography>
    )
}

export function Description() {
    const { t } = useTranslation();
    return (
        <Typography variant="h4" component="h2" fontWeight={"light"} color="textSecondary">
            {t("landing.desc")}
        </Typography>
    )
}