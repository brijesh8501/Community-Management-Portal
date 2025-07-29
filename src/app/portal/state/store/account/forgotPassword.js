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
    forgotPassword: {
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
            ]
        ],
        button: {
            submit: {
                name: "forgotpassword",
                id: "forgotpassword",
                class: "btn-primary btn-fill",
                text: "Request Password"
            }
        }
    }
}