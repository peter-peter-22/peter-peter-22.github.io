import Stack from "@mui/material/Stack";
import { SmallIcon } from "../../decorations/SmallIcon";
import { SmallIconButton } from "../../decorations/buttons/SmallIconButton";

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
        <Stack direction={"row"} spacing={0.5}>
            <SmallIconButton component={NextIcon} sx={{ filter: "invert(1)" }} />
            <SmallIconButton component={MuiIcon} />
            <SmallIconButton component={NodeIcon} />
            <SmallIconButton component={PostgresqlIcon} />
            <SmallIconButton component={ReactIcon} />
            <SmallIconButton component={CloudinaryIcon} />
            <SmallIconButton component={MongoIcon} />
            <SmallIconButton component={BootstrapIcon} />
            <SmallIconButton component={HtmlIcon} />
            <SmallIconButton component={CssIcon} />
            <SmallIconButton component={JsIcon} />
        </Stack>
    )
}