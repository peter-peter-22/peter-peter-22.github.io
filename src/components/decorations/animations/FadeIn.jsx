import Box from "@mui/material/Box";

export function FloatIn({ delay = 0, duration = 0.5, children }) {
    return (
        <Box
            sx={{
                "@keyframes float-in": {
                    from: {
                        opacity: 0,
                        transform: "translateY(20px)"
                    },
                    to: {
                        opacity: 1,
                        transform: "none"
                    }
                },
                opacity: 0.01,
                transform: "translateY(20px)",
                animation: `float-in ${duration}s ease-out forwards`,
            }}
            style={{
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </Box>
    )
}

export function FadeIn({ delay = 0, duration = 0.5, children }) {
    return (
        <Box
            sx={{
                "@keyframes fade-in": {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    }
                },
                opacity: 0,
                animation: `fade-in ${duration}s ease-in-out forwards`,
            }}
            style={{
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </Box>
    )
}