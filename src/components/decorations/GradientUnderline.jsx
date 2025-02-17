import SvgIcon from "@mui/material/SvgIcon";
import UnderlineSvg from "/src/assets/svgs/underline.svg?react";

export function GradientUnderline() {
    return (
        <SvgIcon component={UnderlineSvg} inheritViewBox sx={theme => ({
            fontSize: { xs: 200, sm: 300 },
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translate(-50%, 50%) scaleY(-1)",
            zIndex: -1,
            "--start": theme.palette.analogous1.main,
            "--middle": theme.palette.primary.main,
            "--end": theme.palette.analogous2.main
        })} />
    )
}