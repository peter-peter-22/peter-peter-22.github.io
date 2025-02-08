import SvgIcon from "@mui/material/SvgIcon";

export function Logo({ component, sx, ...props }) {
    return (
        <SvgIcon component={component} inheritViewBox sx={{ fill: "revert-layer", ...sx }} {...props} />
    )
}