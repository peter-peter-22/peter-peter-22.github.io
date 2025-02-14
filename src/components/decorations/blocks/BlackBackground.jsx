import Box from "@mui/material/Box";

export function BlackBackground({ color, transition, start, end, children }) {
    return (
        <div>
            {start &&
                <Box sx={{
                    backgroundImage: `linear-gradient(to bottom, transparent, ${color})`,
                    height: transition
                }} />
            }
            <Box sx={{ backgroundColor: color }}>
                {children}
            </Box>
            {end &&
                <Box sx={{
                    backgroundImage: `linear-gradient(to top, transparent, ${color})`,
                    height: transition
                }} />
            }
        </div>
    )
}