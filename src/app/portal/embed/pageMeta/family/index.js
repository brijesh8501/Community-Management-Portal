// Family
// Page meta configuration information of family module

// Family module
export const familyModuleMeta = {
    label: {
        en: "Family",
        guj: "કુટુંબ"
    },
    moduleSlug: "family"
}

// Pages

// History page
export const familyHistoryPageMeta = {
    label: {
        en: "Your Family History",
        guj: "તમારો કૌટુંબિક ઇતિહાસ"
    },
    linkageLabel: {
        en: "Your Family History",
        guj: "તમારો કૌટુંબિક ઇતિહાસ"
    },
    pageSlug: "history",
    pageRoute: familyModuleMeta.moduleSlug,
    pageSubSection: {
        familyTree:{
            label: {
                en: "Your Family Tree",
                guj: "તમારું કુટુંબ વૃક્ષ"
            },
            linkageLabel: {
                en: "Make changes to your family tree",
                guj: "તમારા કુટુંબ વૃક્ષમાં ફેરફાર કરો"
            }
        }
    }
};

// Search page
export const familySearchPageMeta = {
    label: {
        en: "Family Search",
        guj: "કુટુંબ શોધ"
    },
    linkageLabel: {
        en: "Family Search",
        guj: "કુટુંબ શોધ"
    },
    pageSlug: "search",
    pageRoute: familyModuleMeta.moduleSlug,
    pageSubSection: {
        familyMemberList:{
            label: {
                en: "List of Family Members",
                guj: "કુટુંબના સભ્યોની યાદી"
            }
        }
    }
};

// Add family member page
export const familyMemberAddPageMeta = {
    label: {
        en: "Family Member",
        guj: "કુટુંબના સભ્ય"
    },
    linkageLabel: {
        en: "Family Member",
        guj: "કુટુંબના સભ્ય"
    },
    pageSlug: "add",
    pageRoute: familyModuleMeta.moduleSlug
};

// Edit family member page
export const familyMemberEditPageMeta = {
    label: {
        en: "Family Member",
        guj: "કુટુંબના સભ્ય"
    },
    linkageLabel: {
        en: "Family Member",
        guj: "કુટુંબના સભ્ય"
    },
    pageSlug: "edit",
    pageRoute: familyModuleMeta.moduleSlug
};

// Pages