import Chip from "@mui/material/Chip";
import Grid from '@mui/material/Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function LanguageEntry({ icon, title, body, bottom, ...props }) {
    return (
        <Grid size={1} sx={{ "&:nth-of-type(even) > .MuiStack-root": { flexDirection: "row-reverse" } }} {...props}>
            <Stack
                direction="row"
                sx={theme => ({
                    gap: 2,
                    alignItems: "center",
                    height: "100%",
                    [theme.breakpoints.down("md")]: {
                        flexDirection: "column !important"
                    }
                })}
            >
                {icon}
                <Paper
                    sx={{
                        flexGrow: 1,
                        minHeight: 200,
                        height: "100%",
                        p: 1,
                        display: "flex",
                    }}>
                    <Stack spacing={1} justifyContent={"space-between"} >
                        <Typography component="h3" variant="h5">{title}</Typography>
                        <Typography  color="textSecondary">{body}</Typography>
                        {bottom}
                    </Stack>
                </Paper>
            </Stack>
        </Grid >
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