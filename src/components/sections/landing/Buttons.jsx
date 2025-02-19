import Stack from "@mui/material/Stack";
import { GradientFab } from "../../decorations/buttons/GradientFab";
import { SecondaryFab } from "../../decorations/buttons/SecondaryFab";
import { useTranslation } from 'react-i18next';

import PermMediaIcon from '@mui/icons-material/PermMedia';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export function TitleButtons() {
    const { t } = useTranslation();
    return (
        <Stack direction="row" spacing={2} >
            <GradientFab variant="extended" href="#projects">
                <PermMediaIcon sx={{ mr: 1 }} />
                {t("landing.projects")}
            </GradientFab>
            <SecondaryFab variant="extended" href="#contact">
                <AlternateEmailIcon sx={{ mr: 1 }} />
                {t("landing.contact")}
            </SecondaryFab>
        </Stack>
    )
}