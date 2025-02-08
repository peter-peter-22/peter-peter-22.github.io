import Chip from "@mui/material/Chip";
import Grid from '@mui/material/Grid2';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FixedGradientPaper } from "../../decorations/blocks/FixedGradientBlock";

export function LanguageEntry({ icon, title, body, bottom }) {
    return (
        <Grid size={1} sx={{ "&:nth-of-type(even) > .MuiStack-root": { flexDirection: "row-reverse" } }}>
            <Stack direction="row" sx={{ gap: 2, alignItems: "center", height: "100%" }}>
                {icon}
                <FixedGradientPaper variant="outlined" sx={{ p: 1, flexGrow: 1, minHeight: 200, display: "flex", height: "100%" }}>
                    <Stack spacing={1} justifyContent={"space-between"} >
                        <Typography component="h3" variant="h5">{title}</Typography>
                        <Typography textAlign={"justify"}>{body}</Typography>
                        {bottom}
                    </Stack>
                </FixedGradientPaper>
            </Stack>
        </Grid>
    )
}

export function LanguageEntryChips({ title, chips }) {
    return (
        <div>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
                {title}
            </Typography>
            <Stack direction="row" gap={1} flexWrap={"wrap"}>
                {chips.map((text, i) => (
                    <Chip label={text} key={i} />
                ))}
            </Stack>
        </div>
    )
}