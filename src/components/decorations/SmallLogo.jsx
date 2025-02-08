import { Logo } from "./Logo";

export function SmallLogo({ component, sx, ...props }) {
    return (
        <Logo component={component} sx={{ fontSize: 40, ...sx }} {...props} />
    )
}