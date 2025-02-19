import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import { createContext } from "react";
import { useContext } from "react";
import { GradientCircularProgress } from "../decorations/GradientCircularProgress";

export function LoadingSceen({ children }) {
    const [visible, setVisible] = useState(true)
    const { t } = useTranslation()
    useEffect(() => {
        document.fonts.ready.then(() => {
            setVisible(false);
        });
    }, [])
    return (
        <LoadingContext.Provider value={visible}>
            <Fade in={visible} appear={false} timeout={500}>
                <Box sx={theme => ({
                    bgcolor: "common.black",
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    zIndex: theme.zIndex.drawer,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: theme.spacing()
                })}>
                    <GradientCircularProgress />
                    <Typography variant="h5" fontWeight={"normal"} component="h1">
                        {t("loading.title")}
                    </Typography>
                </Box>
            </Fade>
            {children}
        </LoadingContext.Provider>
    )
}

const LoadingContext = createContext(true)

export function useLoading() {
    return useContext(LoadingContext)
}