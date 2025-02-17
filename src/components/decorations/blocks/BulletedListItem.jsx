import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export function BulletedListItem({ color, children, variant, ...props }) {
    return (
        <ListItem disablePadding alignItems="flex-start" {...props}>
            <ListItemIcon sx={{ minWidth: { xs: 30, md: 40 } }}>
                <ArrowCircleRightIcon sx={{ color, fontSize: "1em" }} />
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={
                    <Typography color={color} variant="inherit">
                        {children}
                    </Typography>
                }
            />
        </ListItem>
    )
}