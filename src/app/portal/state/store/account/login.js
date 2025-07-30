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
    login: {
        formLayout: [
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
                    },
                    data: ""
                } 
            ],
            [
                {
                    type: "inputGroup",
                    subType: "password",
                    inputGroupInfo: {
                        item: <img src={`${process.env.PUBLIC_URL}/assets/icons/eye-view.png`} alt="Eye icon" className="img-fluid eye-icon" />,
                        position: "end"
                    },
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
            ]
        ],
        button: {
            submit: {
                name: "login",
                id: "login",
                class: "btn-primary btn-fill",
                text: "Log In"
            }
        }

    }
}