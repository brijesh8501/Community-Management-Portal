// Branding configuration for the application -start
export const BRANDING = {
    projectName: "Community Portal",
    clientName: "Cortel Group",
    tagline: "Connect, Share, Grow",
    logo: {
        main: "/logo/Cortel-Group-with-text.png"
    },
    favicon: {
        main: "/icon/favicon.ico",
        size32: "/icon/favicon-32x32.png",
        size16: "/icon/favicon-16x16.png",
    }
} as const;
// Branding configuration for the application -end

// Navbar items configuration -start
export interface NavBarItemsInterface {
    label: string;
    path: string;
    badge?: number;
}

export const NAVBAR_ITEMS: NavBarItemsInterface[] = [
    {
        label: "Home", path: "/"
    },
    {
        label: "Profile", path: "/profile"
    }

] as const;
// Navbar items configuration -end
