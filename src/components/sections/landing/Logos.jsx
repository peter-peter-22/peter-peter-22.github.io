import Stack from "@mui/material/Stack";
import { SmallLogo } from "../../decorations/SmallLogo";
import IconButton from "@mui/material/IconButton";

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
    return (
        <Stack direction={"row"} gap={0.5}>
            <IconButton edge="start">
                <SmallLogo component={NextIcon} sx={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton>
                <SmallLogo component={MuiIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={NodeIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={PostgresqlIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={ReactIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={CloudinaryIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={MongoIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={BootstrapIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={HtmlIcon} />
            </IconButton>
            <IconButton>
                <SmallLogo component={CssIcon} />
            </IconButton>
            <IconButton edge="end">
                <SmallLogo component={JsIcon} />
            </IconButton>
        </Stack>
    )
}