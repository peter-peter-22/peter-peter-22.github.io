import { Logo } from "./Logo";

export function SmallLogo({ component, sx, ...props }) {
    return (
        <Logo component={component} sx={{ fontSize: {xs:30,sm:40}, ...sx }} {...props} />
    )
}