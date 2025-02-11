import Marquee from "react-fast-marquee";
import { styled } from '@mui/material/styles';

export const MarqueFadeEdges=styled(Marquee)(({theme})=>({
    maskImage:`linear-gradient(to right, transparent, white 20px, white calc(100% - 20px), transparent)`
}))