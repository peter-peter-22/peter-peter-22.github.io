import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import { alpha } from "@mui/material/styles";
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { ChangeLanguageDialog } from './ChangeLanguageDialog';


export function Header() {
    const { t, } = useTranslation();
    const [open, setOpen] = useState(false)
    const onClose = useCallback(() => { setOpen(false) }, [])
    const onOpen = useCallback(() => { setOpen(true) }, [])
    return (
        <>
            <Tooltip title={t("header.change-language")} placement="left">
                <IconButton
                    sx={theme => ({ position: "fixed", top: 0, right: 0, zIndex: theme.zIndex.appBar, m: 1, bgcolor: alpha(theme.palette.common.black, 0.5) })}
                    component="nav"
                    onClick={onOpen}
                >
                    <TranslateIcon />
                </IconButton>
            </Tooltip>
            <ChangeLanguageDialog open={open} onClose={onClose} />
        </>
    )
}