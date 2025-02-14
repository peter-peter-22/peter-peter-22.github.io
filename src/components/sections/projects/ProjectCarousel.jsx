import Box from "@mui/material/Box";
import { FixedGradientPaperOutline } from "../../decorations/blocks/FixedGradientBlock";
import { ImageCarousel } from "../../functional/ImageCarousel";

export function ProjectCarousel({ sx, urls }) {
    return (
        <FixedGradientPaperOutline sx={{
            width: { xs: 250, sm: 350 },
            height: { xs: 250, sm: 350 },
            "& .MuiPaper-root": {
                overflow: "hidden",
            },
            ...sx
        }}>
            <Box sx={theme => ({
                height: "100%",
                "& .swiper": {
                    height: "100%"
                },
                "& .swiper-slide": {
                    background: "black",
                },
                "& .swiper-slide img": {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center"
                },
                "& .swiper-pagination-bullet": {
                    transition: theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
                },
                "& .swiper-pagination-bullet-active": {
                    backgroundColor: "primary.light"
                },
            })}>
                <ImageCarousel urls={urls} />
            </Box>
        </FixedGradientPaperOutline>
    )
}
