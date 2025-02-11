import CircleIcon from '@mui/icons-material/Circle';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LightPaper } from "../../decorations/blocks/LightsBlock";

export function AboutMe() {
    return (
        <Container>
            <Box sx={{ position: "relative" }}>
                <Background />
                <CardContent>
                    <Typography variant="h2" textAlign={"center"}>
                        About me
                    </Typography>
                    <EntryContainer>
                        <Entry
                            title="Introduction"
                            body={<>
                                My name is Peter, I was born in Hungary and I live in Borsod County.
                            </>}
                            dotColor="analogous2"
                        />
                        <Entry
                            title="Education"
                            body={<>
                                I learned what I know from an Udemy full-stack web-developer course and several smaller tutorials.
                                I am learning to code for more than a year.
                            </>}
                            dotColor="primary"
                        />
                        <Entry
                            title="Degrees"
                            body={<>
                                I have electrician and PLC programmer degrees.
                            </>}
                            dotColor="analogous1"
                        />
                    </EntryContainer>
                </CardContent>
            </Box >
        </Container >
    )
}

function Entry({ title, body, dotColor = "inherit" }) {
    return (
        <Box sx={{ ml: 1 }}>
            <Typography variant="h5" component="h3" sx={{ position: "relative" }}>
                <CircleIcon
                    color={dotColor}
                    sx={{ position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)", fontSize: "0.75em",mr:0.5 }}
                />
                {title}
            </Typography>
            <Typography>
                {body}
            </Typography>
        </Box>
    )
}

function EntryContainer({ children }) {
    return (
        <Card variant="outlined" sx={{ bgcolor: "background.foreground" }}>
            <CardContent>
                <Stack gap={3}>
                    {children}
                </Stack>
            </CardContent>
        </Card>
    )
}

function Background() {
    return (
        <LightPaper sx={{ height: 200, position: "absolute", top: 0, left: 0, width: "100%", zIndex: -1 }} />
    )
}