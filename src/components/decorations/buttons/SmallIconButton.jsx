import IconButton from "@mui/material/IconButton";
import { SmallIcon } from "../SmallIcon";

export function SmallIconButton(props) {
    return (
        <IconButton sx={{ padding: "12px" }}>
            <SmallIcon  {...props} />
        </IconButton>
    )
}