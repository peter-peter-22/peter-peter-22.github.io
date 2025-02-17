import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import { BlackBackground } from "../../decorations/blocks/BlackBackground";

import EmailIcon from '@mui/icons-material/Email';
import GitHub from "@mui/icons-material/GitHub";
import XIcon from '@mui/icons-material/X';
import { createEmailUrl } from "../../functional/emailLinkGenerator";

export function Footer() {
    const theme = useTheme()
    return (
        <BlackBackground
            start={true}
            transition={100}
            color={theme.palette.common.black}
        >
            <Container component="footer">
                <Stack gap={2} py={5}>
                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"space-between"} alignItems={"center"} gap={1}>
                        <Typography >
                            Created by Peter in 2025
                        </Typography>
                        <Stack direction={"row"} gap={1}>
                            <IconButton target="_blank" size="small" href="https://github.com/peter-peter-22">
                                <GitHub />
                            </IconButton>
                            <IconButton target="_blank" size="small" href={createEmailUrl({ title:"Response to your portfolio" })}>
                                <EmailIcon />
                            </IconButton>
                            <IconButton target="_blank" size="small" href="https://x.com/PeterNew2222">
                                <XIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Stack gap={1} alignItems={{ xs: "center", sm: "start" }}>
                        <Typography color="textSecondary" variant="body1"  >
                            Credits
                        </Typography>
                        < Stack direction={"row"} gap={2} rowGap={0.5} flexWrap={"wrap"} justifyContent={{ xs: "center", sm: "start" }}>
                            <FooterLink href="https://icons8.com">
                                Icons8
                            </FooterLink>
                            <FooterLink href="https://mui.com/material-ui/">
                                Material UI
                            </FooterLink>
                            <FooterLink href="https://pages.github.com/">
                                Github pages
                            </FooterLink>
                            <FooterLink href="https://www.npmjs.com/package/react-fast-marquee">
                                React-fast-marquee
                            </FooterLink>
                            <FooterLink href="https://swiperjs.com/">
                                Swiper
                            </FooterLink>
                            <FooterLink href="https://www.freepik.com/vectors">
                                Freepik
                            </FooterLink>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </BlackBackground>
    )
}

function FooterLink({ children, ...props }) {
    return (
        <Link color="textSecondary" variant="body2" fontWeight={"lighter"} target="_blank" {...props}>
            {children}
        </Link>
    )
}