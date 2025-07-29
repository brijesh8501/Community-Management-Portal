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
export default {
    changePassword: {
        formLayout: [
            [
                {
                    type: "email",
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
                    },
                    data: ""
                }
            ],
            [
                {
                    type: "password",
                    name: "password",
                    id: {
                        field_1: "password"
                    },
                    class: "col-12",
                    label: {
                        en: {
                            text: "Password",
                            placeholder: "Enter your password"
                        },
                        guj: {
                            text: "પાસવર્ડ",
                            placeholder: "તમારો પાસવર્ડ દાખલ કરો"
                        }
                    },
                    is_validate: {
                        flag: true,
                        criteria: null
                    },
                    data: ""
                }
            ],
            [
                {
                    type: "password",
                    name: "confirmpassword",
                    id: {
                        field_1: "confirmpassword"
                    },
                    class: "col-12",
                    label: {
                        en: {
                            text: "Confirm password",
                            placeholder: "Confirm your password"
                        },
                        guj: {
                            text: "પાસવર્ડની પુષ્ટિ કરો",
                            placeholder: "તમારા પાસવર્ડની પુષ્ટિ કરો"
                        }
                    },
                    is_validate: {
                        flag: true,
                        criteria: null
                    },
                    data: ""
                }
            ]
        ],
        button: {
            submit: {
                name: "changepassword",
                id: "changepassword",
                class: "btn-primary btn-fill",
                text: "Change Password"
            }
        }
    }
}