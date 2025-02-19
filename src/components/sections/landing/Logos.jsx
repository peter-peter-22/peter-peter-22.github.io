import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SmallLogo } from "../../decorations/SmallLogo";

import BootstrapIcon from "/src/assets/svgs/logos/bootstrap.svg?react";
import CloudinaryIcon from "/src/assets/svgs/logos/cloudinary.svg?react";
import CssIcon from "/src/assets/svgs/logos/css.svg?react";
import HtmlIcon from "/src/assets/svgs/logos/html.svg?react";
import JsIcon from "/src/assets/svgs/logos/js.svg?react";
import MongoIcon from "/src/assets/svgs/logos/mongodb.svg?react";
import MuiIcon from "/src/assets/svgs/logos/mui.svg?react";
import NextIcon from "/src/assets/svgs/logos/nextjs.svg?react";
import NodeIcon from "/src/assets/svgs/logos/nodejs.svg?react";
import PostgresqlIcon from "/src/assets/svgs/logos/postgresql.svg?react";
import ReactIcon from "/src/assets/svgs/logos/react.svg?react";
import { MarqueFadeEdges } from "../../decorations/animations/FadeoutMarque";
import { FadeIn } from "../../decorations/animations/FadeIn";
import Tooltip from "@mui/material/Tooltip";

export function Logos({ delay }) {
    const theme = useTheme();
    const isMarquee = useMediaQuery(theme.breakpoints.down("md"));

    return isMarquee ? (
        <FadeIn delay={delay}>
            <MarqueFadeEdges
                direction={"row"}
                gap={0.5}
                autoFill
                pauseOnHover
                style={{
                    margin: "-20px 0",
                    padding: "20px 0"
                }}
            >
                {logos.map(({ element, url, name }, i) => (
                    <Tooltip key={i} title={name}>
                        <IconButton href={url} sx={{ mr: 0.5 }}>
                            {element}
                        </IconButton>
                    </Tooltip>
                ))}
            </MarqueFadeEdges>
        </FadeIn>
    ) : (
        <Stack direction="row" gap={1}>
            {logos.map(({ element, url, name }, i, arr) => (
                <FadeIn delay={delay + i * 0.05} key={i}>
                    <Tooltip key={i} title={name}>
                        <IconButton href={url} aria-label={name} edge={i == 0 ? "start" : i == arr.length - 1 ? "end" : undefined}>
                            {element}
                        </IconButton>
                    </Tooltip>
                </FadeIn>
            ))}
        </Stack>
    )
}


export const logos = [
    { url: "#languages-next", element: (<SmallLogo component={NextIcon} sx={{ filter: "invert(1)" }} />), name: "NextJS" },
    { url: "#languages-react", element: (<SmallLogo component={MuiIcon} />), name: "Material UI" },
    { url: "#languages-node", element: (<SmallLogo component={NodeIcon} />), name: "NodeJS" },
    { url: "#languages-postgres", element: (<SmallLogo component={PostgresqlIcon} />), name: "PostgreSQL" },
    { url: "#languages-react", element: (<SmallLogo component={ReactIcon} />), name: "React" },
    { url: "#languages-react", element: (<SmallLogo component={CloudinaryIcon} />), name: "Cloudinary" },
    { url: "#languages-mongo", element: (<SmallLogo component={MongoIcon} />), name: "MongoDB" },
    { url: "#languages-css", element: (<SmallLogo component={BootstrapIcon} />), name: "Bootstrap" },
    { url: "#languages-html", element: (<SmallLogo component={HtmlIcon} />), name: "HTML" },
    { url: "#languages-css", element: (<SmallLogo component={CssIcon} />), name: "CSS" },
    { url: "#languages-js", element: (<SmallLogo component={JsIcon} />), name: "Javascript" },
]