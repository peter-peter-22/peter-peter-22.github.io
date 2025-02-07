import SvgIcon from "@mui/material/SvgIcon";

export function SmallIcon({ component, sx, ...props }) {
    return (
        <SvgIcon component={component} inheritViewBox sx={{ fontSize: 40, ...sx }} {...props} />
    )
}