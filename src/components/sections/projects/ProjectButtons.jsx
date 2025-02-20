import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from "@mui/material/Stack";
import { useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import { GradientFab } from "../../decorations/buttons/GradientFab";
import { SecondaryFab } from "../../decorations/buttons/SecondaryFab";

import CancelIcon from '@mui/icons-material/Cancel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export function ProjectButtons({ articleUrl, url, dialogBody }) {
    const [open, setOpen] = useState(false)
    const onClose = useCallback(() => { setOpen(false) }, [])
    const onOpen = useCallback(() => { setOpen(true) }, [])
    const { t } = useTranslation();
    return (
        <>
            <Stack direction="row" gap={1}>
                <GradientFab
                    variant="extended"
                    size={"medium"}
                    href={articleUrl}
                    target="_blank"
                >
                    {t("projects.buttons.article")}
                </GradientFab>
                <SecondaryFab
                    variant="extended"
                    size={"medium"}
                    onClick={onOpen}
                >
                    {t("projects.buttons.visit")}
                </SecondaryFab>
            </Stack>
            <Dialog onClose={onClose} open={open} onClick={onClose}>
                <DialogTitle>
                    {t("projects.visit-prompt.title")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t("projects.visit-prompt.body", { url })}
                    </DialogContentText>
                    {dialogBody}
                </DialogContent>
                <DialogActions>
                    <SecondaryFab variant="extended" size={"small"}>
                        <CancelIcon sx={{ mr: 1 }} />
                        {t("projects.visit-prompt.cancel")}
                    </SecondaryFab>
                    <GradientFab variant="extended" size={"small"} autoFocus href={url} target="_blank">
                        <ExitToAppIcon sx={{ mr: 1 }} />
                        {t("projects.visit-prompt.visit")}
                    </GradientFab>
                </DialogActions>
            </Dialog>
        </>
    )
}