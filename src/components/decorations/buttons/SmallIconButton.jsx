import IconButton from "@mui/material/IconButton";
import { SmallLogo } from "../SmallLogo";

export function SmallLogoButton(props) {
    return (
        <IconButton sx={{ padding: "12px" }}>
            <SmallLogo  {...props} />
        </IconButton>
    )
}