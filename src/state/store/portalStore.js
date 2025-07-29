// state/store/portalStore.js
// This is the initial state for the portal

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

const initialPortalState = {
    login: {
        field:{
            email: {
                info: {
                    type: "email",
                    name: "email",
                    id: {
                        field_1: "email"
                    },
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
                },
                data: ""
            },
            password: {
                info: {
                    type: "password",
                    name: "password",
                    id: {
                        field_1: "password"
                    },
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
                    }
                },
                data: ""
            }
        },
        button: {
            submit: {
                name: "login",
                id: "login",
                class: "btn-primary btn-fill",
                text: "Log In"
            }
        }

    },
    registerNewAccount: {
        field:{
            firstname: {
                info: {
                    type: "text",
                    name: "firstname",
                    id: {
                        field_1: "firstname"
                    },
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
                    }
                },
                data: ""
            },
            lastname: {
                info: {
                    type: "text",
                    name: "lastname",
                    id: {
                        field_1: "lastname"
                    },
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
                    }
                },
                data: ""
            },
            birthyear: {
                info: {
                    type: "select",
                    name: "birthyear",
                    id: {
                        field_1: "birthyear"
                    },
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
                    }
                },
                data: ""
            },
            gender: {
                info: {
                    type: "select",
                    name: "gender",
                    id: {
                        field_1: "gender"
                    },
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
                    }
                },
                data: ""
            },
            email: {
                info: {
                    type: "text",
                    name: "email",
                    id: {
                        field_1: "email"
                    },
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
                },
                data: ""
            },
            contactnumber: {
                info: {
                    type: "text",
                    name: "contactnumber",
                    id: {
                        field_1: "contactnumber"
                    },
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
                    }
                },
                data: ""
            },
            password: {
                info: {
                    type: "password",
                    name: "password",
                    id: {
                        field_1: "password"
                    },
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
                    }
                },
                data: ""
            }
        },
        button: {
            submit: {
                name: "signin",
                id: "signin",
                class: "btn-primary btn-fill",
                text: "Sign Up"
            }
        },
        formLayout:[
            [ 
                { 
                    firstname: {
                        info: {
                            type: "text",
                            name: "firstname",
                            id: {
                                field_1: "firstname"
                            },
                            class: "",
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
                        }
                    }
                }, 
                {
                    lastname: {
                    info: {
                        type: "text",
                        name: "lastname",
                        id: {
                            field_1: "lastname"
                        },
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
                        }
                    },
                    data: ""
                } 
            ],
            [ 
                { birthyear: "col-12 col-md-6" }, 
                { gender: "col-12 col-md-6" } 
            ],
            [ 
                { email: "col-12" } 
            ],
            [ 
                { contactnumber: "col-12" } 
            ],
            [ 
                { password: "col-12" } 
            ]
        ],
    },
    forgotPassword: {
        field:{
            email: {
                info: {
                    type: "email",
                    name: "email",
                    id: {
                        field_1: "email"
                    },
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
                },
                data: ""
            }
        },
        button: {
            submit: {
                name: "forgotpassword",
                id: "forgotpassword",
                class: "btn-primary btn-fill",
                text: "Request Password"
            }
        }
    },
    changePassword: {
        field:{
            email: {
                info: {
                    type: "email",
                    name: "email",
                    id: {
                        field_1: "email"
                    },
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
                },
                data: ""
            },
            password: {
                info: {
                    type: "password",
                    name: "password",
                    id: {
                        field_1: "password"
                    },
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
                    }
                },
                data: ""
            },
            confirmpassword: {
                info: {
                    type: "password",
                    name: "confirmpassword",
                    id: {
                        field_1: "confirmpassword"
                    },
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
                    }
                },
                data: ""
            }
        },
        button: {
            submit: {
                name: "changepassword",
                id: "changepassword",
                class: "btn-primary btn-fill",
                text: "Change Password"
            }
        }
    }
};

export default initialPortalState;