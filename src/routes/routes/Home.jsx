import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Title } from "../../components/sections/landing/Title";
import { Landing } from "../../components/sections/landing/Landing";
import { Languages } from "../../components/sections/languages/Languages";
import { AboutMe } from "../../components/sections/about me/AboutMe";

export function Home() {
    return (
        <>
            <Landing />
            <AboutMe />
            <Languages />
        </>
    )
}