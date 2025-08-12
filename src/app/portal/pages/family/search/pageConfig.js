// Page configuration of dashboard

// Title
export const pageTitle = {
    en: "Search Family",
    guj: "કુટુંબ શોધો"
};

// If required, linkage title
export const pageLinkageTitle = {
    en: "Search Family",
    guj: "કુટુંબ શોધો"
};

// URL slug
export const pageURL = "search";

export const familyTree = {
    en: "Your Family Tree",
    guj: "તમારું કુટુંબ વૃક્ષ"
};

// Form layout
export const pageFormLayout = [
    [ 
        {
            type: "dropdown",
            subType: "select",
            name: "place",
            id: {
                field_1: "place"
            },
            class: "col-12 col-md-6",
            label: {
                en: {
                    text: "City or Village",
                    placeholder: "Enter your city or village"
                },
                guj: {
                    text: "શહેર અથવા ગામ",
                    placeholder: "તમારું શહેર અથવા ગામ દાખલ કરો"
                }
            },
            is_validate: {
                flag: true,
                criteria: ["digitOnly"]
            }
        },
        {
            type: "dropdown",
            subType: "select",
            name: "gender",
            id: {
                field_1: "gender"
            },
            class: "col-12 col-md-6 mt-4 mt-md-0",
            label: {
                en: {
                    text: "Gotra",
                    placeholder: "Enter your gotra"
                },
                guj: {
                    text: "ગોત્ર",
                    placeholder: "તમારું ગોત્ર દાખલ કરો"
                }
            },
            is_validate: {
                flag: true,
                criteria: ["digitOnly"]
            }
        }
    ]
];

// Form button
export const pageFormButton = {
    submit: {
        name: "signin",
        id: "signin",
        class: "btn-primary btn-fill",
        label: {
            en: "Search",
            guj: "શોધો"
        }
    }
}


