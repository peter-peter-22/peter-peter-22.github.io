import Stack from "@mui/material/Stack";
import { SmallLogo } from "../../decorations/SmallLogo";
import { SmallLogoButton } from "../../decorations/buttons/SmallIconButton";

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
            <SmallLogoButton component={NextIcon} sx={{ filter: "invert(1)" }} />
            <SmallLogoButton component={MuiIcon} />
            <SmallLogoButton component={NodeIcon} />
            <SmallLogoButton component={PostgresqlIcon} />
            <SmallLogoButton component={ReactIcon} />
            <SmallLogoButton component={CloudinaryIcon} />
            <SmallLogoButton component={MongoIcon} />
            <SmallLogoButton component={BootstrapIcon} />
            <SmallLogoButton component={HtmlIcon} />
            <SmallLogoButton component={CssIcon} />
            <SmallLogoButton component={JsIcon} />
        </Stack>
    )
}