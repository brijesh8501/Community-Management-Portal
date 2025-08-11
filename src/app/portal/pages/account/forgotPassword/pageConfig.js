/********** Validation Rules: is_validate **********

Structure:

    flag: Boolean
    - true: field is required
    - false: field is optional

    criteria: Array
    - Add validation rules as strings
    - List: ["email", "digitOnly"]
    - Leave empty if no specific criteria (i.e., [])

***********************************************/
// Page configuration of forgot password

// Title
export const pageTitle = {
    en: "Forgot password?",
    guj: "પાસવર્ડ ભૂલી ગયા છો?"
};

// If required, linkage title
export const pageLinkageTitle = {
    en: "Forgot password?",
    guj: "પાસવર્ડ ભૂલી ગયા છો?"
};

// URL slug
export const pageURL = "forgot-password";

// Form layout
export const pageFormLayout = [
    [
        {
            type: "text",
            subType: "email",
            name: "email",
            id: {
                field_1: "email"
            },
            class: "col-12",
            label: {
                en: {
                    text: "Email Address",
                    placeholder: "Enter your email address"
                },
                guj: {
                    text: "ઇમેઇલ સરનામું",
                    placeholder: "તમારું ઇમેઇલ સરનામું દાખલ કરો"
                }
            },
            is_validate: {
                flag: true,
                criteria: ["email"]
            }
        }    
    ]
];

// Form button
export const pageFormButton = {
    submit: {
        name: "forgotpassword",
        id: "forgotpassword",
        class: "btn-primary btn-fill",
        label: {
            en: "Request Password",
            guj: "પાસવર્ડની વિનંતી કરો"
        }
    }
};