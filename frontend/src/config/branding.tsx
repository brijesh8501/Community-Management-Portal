// Branding configuration for the application -start

// Project and client names
const whichProject = "RealSale";
const whichClient = "Sunny Communities";

export const BRANDING = {
    projectName: whichProject,
    clientName: whichClient,
    tagline: "Connect, Share, Grow",
    logo: {
        clientLogo: {
            main: {
                path: "/logo/builder-logo.png",
                alt: `Builder logo of ${whichClient}`
            }
        },
        featuredCommunityLogo: {
            main: {
                path: "/logo/featured-community-logo.png",
                alt: `Featured Community logo of ${whichClient}`
            }
        },
        systemLogo: {
            main: {
                path: "/logo/realsale-black-logo.png",
                alt: `${whichProject} logo in black`
            },
            secondary: {
                path: "/logo/realsale-white-logo.png",
                alt: `${whichProject} logo in white`
            }
        }
        
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
