import DialogContentText from "@mui/material/DialogContentText";
import Stack from "@mui/material/Stack";
import { Project, ProjectListItem } from "./Project";
import { ProjectButtons } from "./ProjectButtons";
import { Title } from "../../decorations/texts/Title";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export function Projects() {
    const { t } = useTranslation()
    return (
        <Box component="section">
            <Title>
                {t("projects.title")}
            </Title>
            <Stack gap={{ xs: 10, sm: 15, md: 20 }}>
                <Project
                    title={"Textmine"}
                    summary={t("projects.textmine.summary")}
                    description={
                        <>
                            <ProjectListItem color={"primary.light"}>
                                {t("projects.textmine.desc.1")}
                            </ProjectListItem>
                            <ProjectListItem color={"primary.light"}>
                                {t("projects.textmine.desc.2")}
                            </ProjectListItem>
                            <ProjectListItem color={"primary.light"}>
                                {t("projects.textmine.desc.3")}
                            </ProjectListItem>
                            <ProjectListItem color={"primary.light"}>
                                {t("projects.textmine.desc.4")}
                            </ProjectListItem>
                        </>
                    }
                    environments={["NextJS", "PostgreSQL"]}
                    images={["/projects/blog/1.webp", "/projects/blog/2.webp", "/projects/blog/3.webp"]}
                    buttons={
                        <ProjectButtons
                            url={"https://textmine.the-projects-of-peter.fyi/"}
                            articleUrl={"https://textmine.the-projects-of-peter.fyi/articles/textmine-technical-highlights"}
                        />
                    }
                />
                <Project
                    title={"My Chat"}
                    summary={t("projects.mychat.summary")}
                    description={
                        <>
                            <ProjectListItem >
                                {t("projects.mychat.desc.1")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.mychat.desc.2")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.mychat.desc.3")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.mychat.desc.4")}
                            </ProjectListItem>
                        </>
                    }
                    environments={["React", "NodeJS", "Cloudinary", "MongoDB", "Docker"]}
                    images={["/projects/chat/1.webp", "/projects/chat/2.webp", "/projects/chat/3.webp"]}
                    buttons={
                        <ProjectButtons
                            url={"https://awake-rapid-tortoise.ngrok-free.app/"}
                            articleUrl={"https://textmine.the-projects-of-peter.fyi/articles/my-chat-technical-highlights"}
                            dialogBody={<DialogContentText color="warning">
                                {t("projects.mychat.visit-prompt")}
                            </DialogContentText>}
                        />
                    }
                />
                <Project
                    title={"Y Community"}
                    summary={t("projects.y.summary")}
                    description={
                        <>
                            <ProjectListItem >
                                {t("projects.y.desc.1")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.y.desc.2")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.y.desc.3")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.y.desc.4")}
                            </ProjectListItem>
                        </>
                    }
                    environments={["React", "NodeJS", "PostgreSQL", "Cloudinary"]}
                    images={["/projects/y/1.webp", "/projects/y/2.webp", "/projects/y/3.webp"]}
                    buttons={
                        <ProjectButtons
                            url={"https://y-community.vercel.app/"}
                            articleUrl={"https://textmine.the-projects-of-peter.fyi/articles/y-community-technical-highlights"}
                        />
                    }
                />
                <Project
                    title={"Sample Shop"}
                    summary={t("projects.shop.summary")}
                    description={
                        <>
                            <ProjectListItem >
                                {t("projects.shop.desc.1")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.shop.desc.2")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.shop.desc.3")}
                            </ProjectListItem>
                            <ProjectListItem >
                                {t("projects.shop.desc.4")}
                            </ProjectListItem>
                        </>
                    }
                    environments={["EJS", "NodeJS", "PostgreSQL", "Stripe"]}
                    images={["/projects/shop/1.webp", "/projects/shop/2.webp", "/projects/shop/3.webp"]}
                    buttons={
                        <ProjectButtons
                            url={"https://sample-shop-48hl.onrender.com/"}
                            articleUrl={"https://textmine.the-projects-of-peter.fyi/articles/sample-shop-technical-highlights"}
                            dialogBody={<DialogContentText color="warning">
                                {t("projects.shop.visit-prompt")}
                            </DialogContentText>}
                        />
                    }
                />
            </Stack>
        </Box>
    )
}