import SvgIcon from "@mui/material/SvgIcon";

export function Logo({ component,  ...props }) {
    return (
        <SvgIcon component={component} inheritViewBox {...props} />
    )
}