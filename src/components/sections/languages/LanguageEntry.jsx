import Chip from "@mui/material/Chip";
import Grid from '@mui/material/Grid2';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FixedGradientPaperOutline } from "../../decorations/blocks/FixedGradientBlock";

export function LanguageEntry({ icon, title, body, bottom,...props }) {
    return (
        <Grid size={1} sx={{ "&:nth-of-type(even) > .MuiStack-root": { flexDirection: "row-reverse" } }} {...props}>
            <Stack
                direction="row"
                sx={theme => ({
                    gap: 2,
                    alignItems: "center",
                    height: "100%",
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: "column !important"
                    }
                })}
            >
                {icon}
                <FixedGradientPaperOutline sx={{
                    flexGrow: 1,
                    minHeight: 200,
                    height: "100%",
                    "& .MuiPaper-root": {
                        p: 1,
                        display: "flex",
                        bgcolor:"background.foreground"
                    }
                }}>
                    <Stack spacing={1} justifyContent={"space-between"} >
                        <Typography component="h3" variant="h5">{title}</Typography>
                        <Typography textAlign={"justify"} color="textSecondary">{body}</Typography>
                        {bottom}
                    </Stack>
                </FixedGradientPaperOutline>
            </Stack>
        </Grid>
    )
}

export function LanguageEntryChips({ title, chips }) {
    return (
        <div>
            <Typography variant="body2" fontWeight={"lighter"} color="textSecondary" sx={{ mb: 0.5 }}>
                {title}:
            </Typography>
            <Stack direction="row" gap={1} flexWrap={"wrap"}>
                {chips.map((text, i) => (
                    <Chip label={text} key={i} />
                ))}
            </Stack>
        </div>
    )
}