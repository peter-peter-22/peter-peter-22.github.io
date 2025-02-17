import DialogContentText from '@mui/material/DialogContentText';
import Stack from "@mui/material/Stack";
import { Project, ProjectListItem } from "./Project";
import { ProjectButtons } from "./ProjectButtons";
import { Title } from '../../decorations/texts/Title';

export function Projects() {
    return (
        <div>
            <Title>
                Projects
            </Title>
            <Stack gap={{ xs: 10, sm: 15, md: 20 }}>
                <Project
                    title={"Textmine"}
                    summary={"A journalist site."}
                    description={
                        <>
                            <ProjectListItem color={"primary.light"}>
                                Fully implemented SEO.
                            </ProjectListItem>
                            <ProjectListItem color={"primary.light"}>
                                Deltailed article editor.
                            </ProjectListItem>
                            <ProjectListItem color={"primary.light"}>
                                Likes, comments, follows and notifications.
                            </ProjectListItem>
                            <ProjectListItem color={"primary.light"}>
                                Clean and reusable code.
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
                    summary={"A realtime chat site."}
                    description={
                        <>
                            <ProjectListItem >
                                Can display nearly limitless messages.
                            </ProjectListItem>
                            <ProjectListItem >
                                Multiple languages.
                            </ProjectListItem>
                            <ProjectListItem >
                                Direct file uploading and optimized cloud.
                            </ProjectListItem>
                            <ProjectListItem >
                                Multiple rooms and in-app notifications.
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
                                This site is hosted locally and it's normally not online.
                            </DialogContentText>}
                        />
                    }
                />
                <Project
                    title={"Y Community"}
                    summary={"A social media site inspired by X."}
                    description={
                        <>
                            <ProjectListItem >
                                Working likes, reposts, hashtags, follow, block...
                            </ProjectListItem>
                            <ProjectListItem >
                                Push, email and in-app notifications.
                            </ProjectListItem>
                            <ProjectListItem >
                                Can display thousands of posts.
                            </ProjectListItem>
                            <ProjectListItem >
                                Full registration session with rechapta.
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
                    summary={"A shopping site with real payment method."}
                    description={
                        <>
                            <ProjectListItem >
                                Deltailed filters and nested categories.
                            </ProjectListItem>
                            <ProjectListItem >
                                The top discounts and products are displayed on the front page.
                            </ProjectListItem>
                            <ProjectListItem >
                                The discounts have adjustable validity and repeating.
                            </ProjectListItem>
                            <ProjectListItem >
                                Admin UI for managing products, discounts and comments.
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
                                This free server needs up to 50 seconds to start after inactivity.
                            </DialogContentText>}
                        />
                    }
                />
            </Stack>
        </div>
    )
}