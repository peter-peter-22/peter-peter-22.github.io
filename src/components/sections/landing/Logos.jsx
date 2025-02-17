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

export function Logos() {
    const theme = useTheme();
    const isMarquee = useMediaQuery(theme.breakpoints.down("md"));

    return isMarquee ? (
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
            {logos.map(({ element, url }, i) => (
                <IconButton href={url} key={i} sx={{ mr: 0.5 }}>
                    {element}
                </IconButton>
            ))}
        </MarqueFadeEdges>
    ) : (
        <Stack direction="row" gap={1}>
            {logos.map(({ element, url }, i, arr) => (
                <IconButton href={url} key={i} edge={i == 0 ? "start" : i == arr.length - 1 ? "end" : undefined}>
                    {element}
                </IconButton>
            ))}
        </Stack>
    )
}


const logos = [
    { url: "#languages-next", element: (<SmallLogo component={NextIcon} sx={{ filter: "invert(1)" }} />) },
    { url: "#languages-react", element: (<SmallLogo component={MuiIcon} />) },
    { url: "#languages-node", element: (<SmallLogo component={NodeIcon} />) },
    { url: "#languages-postgres", element: (<SmallLogo component={PostgresqlIcon} />) },
    { url: "#languages-react", element: (<SmallLogo component={ReactIcon} />) },
    { url: "#languages-react", element: (<SmallLogo component={CloudinaryIcon} />) },
    { url: "#languages-mongo", element: (<SmallLogo component={MongoIcon} />) },
    { url: "#languages-css", element: (<SmallLogo component={BootstrapIcon} />) },
    { url: "#languages-html", element: (<SmallLogo component={HtmlIcon} />) },
    { url: "#languages-css", element: (<SmallLogo component={CssIcon} />) },
    { url: "#languages-js", element: (<SmallLogo component={JsIcon} />) },
]