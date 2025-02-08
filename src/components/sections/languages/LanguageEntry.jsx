import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FixedGradientPaper } from "../../decorations/blocks/FixedGradientBlock";
import Chip from "@mui/material/Chip";

export function LanguageEntry({ icon, title, body, bottom }) {
    return (
        <Stack direction="row" sx={{ gap: 2, alignItems: "center", "&:nth-child(even)": { flexDirection: "row-reverse" } }}>
            {icon}
            <FixedGradientPaper variant="outlined" sx={{ p: 1, flexGrow: 1, minHeight: 200, display: "flex" }}>
                <Stack spacing={1} sx={{ my: "auto" }}>
                    <Typography component="h3" variant="h5">{title}</Typography>
                    <Typography textAlign={"justify"}>{body}</Typography>
                    {bottom}
                </Stack>
            </FixedGradientPaper>
        </Stack>
    )
}

export function LanguageEntryChips({ title, chips }) {
    return (
        <>
            <Typography variant="body2" >
                {title}
            </Typography>
            <Stack direction="row" gap={1} flexWrap={"wrap"}>
                {chips.map((text, i) => (
                    <Chip label={text} key={i} />
                ))}
            </Stack>
        </>
    )
}