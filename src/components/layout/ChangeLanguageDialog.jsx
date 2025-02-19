import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import { alpha } from "@mui/material/styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hu', name: 'Magyar' },
];

export function ChangeLanguageDialog({ open, onClose }) {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = e => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {t("header.change-language")}
            </DialogTitle>
            <DialogContent>
                <FormControl variant="standard" fullWidth>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={i18n.resolvedLanguage}
                        onChange={handleLanguageChange}
                    >
                        {languages.map(({ code, name }, i) => (
                            <MenuItem value={code} key={i}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Fab size="small" variant="extended" color="primary" onClick={onClose}>
                    {t("header.done")}
                </Fab>
            </DialogActions>
        </Dialog>
    )
}