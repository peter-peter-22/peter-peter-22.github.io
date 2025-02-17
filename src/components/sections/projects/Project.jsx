import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import { useTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import { BulletedListItem } from "../../decorations/blocks/BulletedListItem";
import { ProjectCarousel } from "./ProjectCarousel";

export function Project({ title, summary, description, environments, images, buttons }) {
    const theme = useTheme()
    const vertical = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Container maxWidth={"lg"} id="projects">
            <Stack direction={"row"} justifyContent={"space-between"} gap={5}>
                <Box mx={{ xs: "auto", md: "0" }}>
                    <Stack gap={2} sx={theme => ({ [theme.breakpoints.down("md")]: { width: "min-content" } })}>
                        <div >
                            <Typography variant="h3" component="h3">
                                {title}
                            </Typography>
                            <Typography color="textSecondary" component="h4">
                                {summary}
                            </Typography>
                        </div>
                        {vertical &&
                            <ProjectCarousel
                                urls={images}
                            />
                        }
                        <List>
                            {description}
                        </List>
                        <Tags title="Environments" tags={environments} />
                        {buttons}
                    </Stack>
                </Box>
                {
                    !vertical &&
                    <ProjectCarousel urls={images} />
                }
            </Stack >
        </Container >
    )
}

function Tags({ title, tags = [] }) {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" fontWeight={"lighter"} sx={{ mb: 0.5 }}>
                {title}
            </Typography>
            <Stack direction="row" gap={1} flexWrap={"wrap"} >
                {tags.map((text, i) => (
                    <Chip size="small" label={text} key={i} />
                ))}
            </Stack>
        </div>
    )
}

export function ProjectListItem({ children, ...props }) {
    return (
        <Typography variant="h5" component="div" fontWeight={"normal"}>
            <BulletedListItem color={"primary.light"} {...props}>
                {children}
            </BulletedListItem>
        </Typography>
    )
}