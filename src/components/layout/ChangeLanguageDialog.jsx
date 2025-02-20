import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { SecondaryFab } from '../decorations/buttons/SecondaryFab';

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
                <SecondaryFab size="small" variant="extended" onClick={onClose}>
                    {t("header.done")}
                </SecondaryFab>
            </DialogActions>
        </Dialog>
    )
}