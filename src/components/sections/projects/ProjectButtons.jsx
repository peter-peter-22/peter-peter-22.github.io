import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import * as React from 'react';
import { useCallback, useState } from "react";
import { GradientFab } from "../../decorations/buttons/GradientFab";
import { SecondaryFab } from "../../decorations/buttons/SecondaryFab";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CancelIcon from '@mui/icons-material/Cancel';

export function ProjectButtons({ articleUrl, url, dialogBody }) {
    const [open, setOpen] = useState(false)
    const onClose = useCallback(() => { setOpen(false) }, [])
    const onOpen = useCallback(() => { setOpen(true) }, [])
    return (
        <>
            <Stack direction="row" gap={1}>
                <GradientFab
                    variant="extended"
                    size={"medium"}
                    href={articleUrl}
                    target="_blank"
                >
                    Article
                </GradientFab>
                <SecondaryFab
                    variant="extended"
                    size={"medium"}
                    onClick={onOpen}
                >
                    Visit
                </SecondaryFab>
            </Stack>
            <Dialog onClose={onClose} open={open} onClick={onClose}>
                <DialogTitle>
                    Are you sure?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to visit "{url}"?
                    </DialogContentText>
                    {dialogBody}
                </DialogContent>
                <DialogActions>
                    <SecondaryFab variant="extended" size={"small"}>
                        <CancelIcon sx={{ mr: 1 }} />
                        Cancel
                    </SecondaryFab>
                    <Fab variant="extended" color="primary" size={"small"} autoFocus href={url} target="_blank">
                        <ExitToAppIcon sx={{ mr: 1 }} />
                        Visit
                    </Fab>
                </DialogActions>
            </Dialog>
        </>
    )
}