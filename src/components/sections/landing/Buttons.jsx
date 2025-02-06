import Stack from "@mui/material/Stack";
import { GradientFab } from "../../decorations/buttons/GradientFab";
import { SecondaryFab } from "../../decorations/buttons/SecondaryFab";

import PermMediaIcon from '@mui/icons-material/PermMedia';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export function TitleButtons() {
    return (
        <Stack direction="row" spacing={2} >
            <GradientFab variant="extended">
                <PermMediaIcon sx={{ mr: 1 }} />
                Projects
            </GradientFab>
            <SecondaryFab variant="extended">
                <AlternateEmailIcon sx={{ mr: 1 }} />
                Contact
            </SecondaryFab>
        </Stack>
    )
}