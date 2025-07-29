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
    registerNewAccount: {
        formLayout:[
            [ 
                {
                    type: "text",
                    name: "firstname",
                    id: {
                        field_1: "firstname"
                    },
                    class: "col-12 col-md-6",
                    label: {
                        en: {
                            text: "Name",
                            placeholder: "Enter your name"
                        },
                        guj: {
                            text: "નામ",
                            placeholder: "તમારું નામ દાખલ કરો"
                        }
                    },
                    is_validate: {
                        flag: true,
                        criteria: ["email"]
                    },
                    data: ""
                }, 
                {
                    type: "text",
                    name: "lastname",
                    id: {
                        field_1: "lastname"
                    },
                    class: "col-12 col-md-6",
                    label: {
                        en: {
                            text: "Surname",
                            placeholder: "Enter your surname"
                        },
                        guj: {
                            text: "અટક",
                            placeholder: "તમારી અટક દાખલ કરો"
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
                    type: "select",
                    name: "birthyear",
                    id: {
                        field_1: "birthyear"
                    },
                    class: "col-12 col-md-6",
                    label: {
                        en: {
                            text: "Birth year",
                            placeholder: "Enter your birth year"
                        },
                        guj: {
                            text: "જન્મ વર્ષ",
                            placeholder: "તમારું જન્મ વર્ષ દાખલ કરો"
                        }
                    },
                    is_validate: {
                        flag: true,
                        criteria: ["digitOnly"]
                    },
                    data: ""
                },
                {
                    type: "select",
                    name: "gender",
                    id: {
                        field_1: "gender"
                    },
                    class: "col-12 col-md-6",
                    label: {
                        en: {
                            text: "Gender",
                            placeholder: "Select your gender"
                        },
                        guj: {
                            text: "જાતિ",
                            placeholder: "તમારું લિંગ પસંદ કરો"
                        }
                    },
                    is_validate: {
                        flag: true,
                        criteria: ["digitOnly"]
                    },
                    data: ""
                }
            ],
            [ 
                { 
                    type: "text",
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
                    type: "text",
                    name: "contactnumber",
                    id: {
                        field_1: "contactnumber"
                    },
                    class: "col-12",
                    label: {
                        en: {
                            text: "Contact number",
                            placeholder: "Enter your contact number"
                        },
                        guj: {
                            text: "સંપર્ક નંબર",
                            placeholder: "તમારો સંપર્ક નંબર દાખલ કરો"
                        }
                    },
                    is_validate: {
                        flag: true,
                        criteria: ["digitOnly"]
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
            ]
        ],
        button: {
            submit: {
                name: "signin",
                id: "signin",
                class: "btn-primary btn-fill",
                text: "Sign Up"
            }
        }
    }
};