import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';
import Icon from '@mui/material/Icon';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Title } from "../../decorations/texts/Title";

import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from "react-i18next";

export function WhatCanIDo() {
    const { t } = useTranslation()
    return (
        <Box sx={{ position: "relative" }}>
            <Container maxWidth="lg" >
                <Title>
                    {t("what.title")}
                </Title>
                <Grid container spacing={5} columns={{ xs: 1, sm: 2, md: 3 }}>
                    <Entry title={t("what.frontend.title")} body={t("what.frontend.body")} icon={VisibilityIcon} />
                    <Entry title={t("what.backend.title")} body={t("what.backend.body")} icon={CodeIcon} />
                    <Entry title={t("what.database.title")} body={t("what.database.body")} icon={StorageIcon} />
                    <Entry title={t("what.analytics.title")} body={t("what.analytics.body")} icon={AnalyticsIcon} />
                    <Entry title={t("what.hosting.title")} body={t("what.hosting.body")} icon={PublicIcon} />
                    <Entry title={t("what.misc.title")} body={t("what.misc.body")} icon={CloudIcon} />
                </Grid>
            </Container>
        </Box>
    )
}

function Entry({ title, icon, body }) {
    return (
        <Grid size={1} >
            <Paper sx={{ p: 2, height: 1 / 1 }}>
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