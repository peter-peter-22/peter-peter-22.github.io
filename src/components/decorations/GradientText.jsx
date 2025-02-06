import Typography from "@mui/material/Typography";

export function GradientText({ startColor, endColor, middleColor, direction, children, ...props }) {
    return (
        <Typography
            sx={{
                backgroundImage: middleColor ? (
                    `linear-gradient(${direction}, ${startColor}, ${middleColor}, ${endColor})`
                ) : (
                    `linear-gradient(${direction}, ${startColor}, ${endColor})`
                ),
                backgroundSize: "100%",
                backgroundClip: "text",
                color: "transparent",
                display: "inline",
            }}
            component={"span"}
            variant="inherit"
            {...props}
        >
            {children}
        </Typography>
    )
}