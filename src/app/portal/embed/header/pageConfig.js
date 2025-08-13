// Page Meta Information
import {
    profilePageMeta,
    familyModuleMeta,
    familyHistoryPageMeta,
    familySearchPageMeta, 
    brideGroomModuleMeta, 
    brideGroomSearchPageMeta 
} from "../../embed/pageMeta";

export const headerConfig = {

    sideBar: [
        {
            link: "/",
            label: {
                en: "Home",
                guj: "હોમ"
            }
        },
        {
            link: familyModuleMeta.moduleSlug,
            label: familyModuleMeta.label,
            options: [
                {
                    link: `${familyHistoryPageMeta.pageRoute}/${familyHistoryPageMeta.pageSlug}`,
                    label: familyHistoryPageMeta.linkageLabel
                },
                {
                    link: `${familySearchPageMeta.pageRoute}/${familySearchPageMeta.pageSlug}`,
                    label: familySearchPageMeta.linkageLabel
                }
            ]
        },
        {
            link: brideGroomModuleMeta.moduleSlug,
            label: brideGroomModuleMeta.label,
            options: [
                {
                    link: `${brideGroomSearchPageMeta.pageRoute}/${brideGroomSearchPageMeta.pageSlug}`,
                    label: brideGroomSearchPageMeta.linkageLabel
                }
            ]
        },
        {
            link: `${profilePageMeta.pageSlug}`,
            label: profilePageMeta.linkageLabel,
            icon: `${process.env.PUBLIC_URL}/assets/icons/profile.webp`
        }
        
    ]

}