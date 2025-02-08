import { Logo } from "./Logo";

export function BigLogo({ component, sx, ...props }) {
    return (
        <Logo component={component} sx={{ fontSize: 80, ...sx }} {...props} />
    )
}