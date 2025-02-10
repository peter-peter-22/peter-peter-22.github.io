import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';
import Icon from '@mui/material/Icon';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { LightBackground, lightBackgrounds } from "../../decorations/backgrounds/LightBackground";

import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function WhatCanIDo() {
    return (
        <Box sx={{ position: "relative" }}>
            <LightBackground background={lightBackgrounds.middle} fadeEdges={true}/>
            <Container maxWidth="lg" >
                <Typography variant="h2" textAlign={"center"} sx={{ mb: 5 }}>What can I do?</Typography>
                <Grid container spacing={5} columns={{ xs: 1, sm: 2, md: 3 }}>
                    <Entry title="Front-end" body="I can design comfortable and optimized frontends with hotkeys, darkmode, translation and interactive forms." icon={VisibilityIcon} />
                    <Entry title="Back-end" body="My servers can handle authentication, databases, realtime updates, caching, cloud services and payment processors." icon={CodeIcon} />
                    <Entry title="Database" body="I can use complex queries, constraints, checks, indexes, triggers and ORMs to manage my databases." icon={StorageIcon} />
                    <Entry title="Analytics" body="I debug and analyze and the performance of my codes with the devtools, VSC breaks, postgres analyze, react devtools and profiler, lighthouse and logs." icon={AnalyticsIcon} />
                    <Entry title="Hosting" body="I can configure my projects for production environments and host them on third party hosting sites like Vercel and Render." icon={PublicIcon} />
                    <Entry title="Miscellaneous" body="I use Git and Github for version control. I can use Google and Github authentication, Google rechapta, Google search console, Cloudinary and Stripe." icon={CloudIcon} />
                </Grid>
            </Container>
        </Box>
    )
}

function Entry({ title, icon, body }) {
    return (
        <Grid size={1} >
            <Paper sx={{ bgcolor: "background.foreground", p: 2, height: 1 / 1 }}>
                <Icon component={icon} fontSize="large" />
                <Typography variant="h5" component="h3">
                    {title}
                </Typography>
                <Typography color="textSecondary" textAlign={"justify"}>
                    {body}
                </Typography>
            </Paper>
        </Grid>
    )
}