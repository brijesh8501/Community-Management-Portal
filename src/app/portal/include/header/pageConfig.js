export const headerConfig = {

    navBar: [
        {
            link: "/",
            label: {
                en: "Home",
                guj: "હોમ"
            }
        },
        {
            link: "family",
            label: {
                en: "Family",
                guj: "કુટુંબ"
            },
            options: [
                {
                    link: "history",
                    label: {
                        en: "Your family history",
                        guj: "તમારો કૌટુંબિક ઇતિહાસ"
                    }
                },
                {
                    link: "search",
                    label: {
                        en: "Search",
                        guj: "શોધ"
                    }
                }
            ]
        },
        {
            link: "bride-groom",
            label: {
                en: "Bride & Groom",
                guj: "કન્યા અને વરરાજા"
            },
            options: [
                {
                    link: "search",
                    label: {
                        en: "Search",
                        guj: "શોધ"
                    }
                }
            ]
        },
        {
            link: "profile",
            label: {
                en: "Account",
                guj: "એકાઉન્ટ"
            },
            icon: `${process.env.PUBLIC_URL}/assets/icons/profile.webp`
        }
        
    ]

}