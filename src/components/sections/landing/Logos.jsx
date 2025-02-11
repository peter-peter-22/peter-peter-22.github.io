import Stack from "@mui/material/Stack";
import { SmallLogo } from "../../decorations/SmallLogo";
import IconButton from "@mui/material/IconButton";
import Marquee from "react-fast-marquee"
import { useTheme } from '@mui/material/styles';
import Container from "@mui/material/Container";
import useMediaQuery from '@mui/material/useMediaQuery';

import CssIcon from "/src/assets/logos/css.svg?react";
import HtmlIcon from "/src/assets/logos/html.svg?react";
import BootstrapIcon from "/src/assets/logos/bootstrap.svg?react";
import CloudinaryIcon from "/src/assets/logos/cloudinary.svg?react";
import JsIcon from "/src/assets/logos/js.svg?react";
import MuiIcon from "/src/assets/logos/mui.svg?react";
import NextIcon from "/src/assets/logos/nextjs.svg?react";
import NodeIcon from "/src/assets/logos/nodejs.svg?react";
import PostgresqlIcon from "/src/assets/logos/postgresql.svg?react";
import ReactIcon from "/src/assets/logos/react.svg?react";
import MongoIcon from "/src/assets/logos/mongodb.svg?react";


export function Logos() {
    const theme = useTheme();
    const isMarquee = useMediaQuery(theme.breakpoints.down("md"));

    return isMarquee ? (
        <Marquee
            direction={"row"}
            gap={0.5}
            autoFill
            pauseOnHover
            style={{ overflowX: "clip" }}
        >
            {logos.map((logo, i) => (
                <IconButton key={i} sx={{ mr: 0.5 }}>
                    {logo}
                </IconButton>
            ))}
        </Marquee>
    ) : (
        <Container>
            <Stack direction="row" gap={1}>
                {logos.map((logo, i, arr) => (
                    <IconButton key={i} edge={i == 0 ? "start" : i == arr.length - 1 ? "end" : undefined}>
                        {logo}
                    </IconButton>
                ))}
            </Stack>
        </Container>
    )
}


const logos = [
    <SmallLogo component={NextIcon} sx={{ filter: "invert(1)" }} />,
    <SmallLogo component={MuiIcon} />,
    <SmallLogo component={NodeIcon} />,
    <SmallLogo component={PostgresqlIcon} />,
    <SmallLogo component={ReactIcon} />,
    <SmallLogo component={CloudinaryIcon} />,
    <SmallLogo component={MongoIcon} />,
    <SmallLogo component={BootstrapIcon} />,
    <SmallLogo component={HtmlIcon} />,
    <SmallLogo component={CssIcon} />,
    <SmallLogo component={JsIcon} />,
]