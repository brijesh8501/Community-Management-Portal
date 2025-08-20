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
// Page configuration of register new account

// Form layout
export const pageFormFieldset = {
    block1: {
        label: {
            en: "Personal Information",
            guj: "વ્યક્તિગત માહિતી"
        }
    },
    block2: {
        label: {
            en: "Current Place of Living",
            guj: "વર્તમાન રહેવાનું સ્થળ"
        },
        subLabel: {
            en: "Please provide details about your current place of living.",
            guj: "તમારા વર્તમાન રહેવાના સ્થળ વિશેની વિગતો આપો."
        }
    },
    block3: {
        label: {
            en: "Native Place Details",
            guj: "મૂળ સ્થાનની વિગતો"
        },
        subLabel: {
            en: "Please provide details about your native place.",
            guj: "તમારા મૂળ સ્થળ વિશેની વિગતો આપો."
        },
        otherFields: {
            nativeField:  {
                type: "checkbox",
                subType: "checkbox",
                name: "birthyear",
                id: {
                    field_1: "native_fields_optional"
                },
                class: "col-12 mb-4",
                label: {
                    en: {
                        text: "My native place details are same as current place details."
                    },
                    guj: {
                        text: "મારા મૂળ સ્થળની વિગતો વર્તમાન સ્થળની વિગતો જેવી જ છે."
                    }
                },
                is_validate: {
                    flag: false,
                    criteria: []
                }
            }
        }
    }
}
export const pageFormLayout = {
    block1: [
        [ 
            {
                type: "text",
                subType: "text",
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
                    criteria: []
                }
            }, 
            {
                type: "text",
                subType: "text",
                name: "lastname",
                id: {
                    field_1: "lastname"
                },
                class: "col-12 col-md-6 mt-4 mt-md-0",
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
                    criteria: []
                }
            } 
        ],
        [ 
            {
                type: "text",
                subType: "text",
                name: "fathername",
                id: {
                    field_1: "fathername"
                },
                class: "col-12 col-md-6",
                label: {
                    en: {
                        text: "Father's Name",
                        placeholder: "Enter your father's name"
                    },
                    guj: {
                        text: "પિતાનું નામ",
                        placeholder: "તમારા પિતાનું નામ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: []
                }
            }, 
            {
                type: "text",
                subType: "text",
                name: "mothername",
                id: {
                    field_1: "mothername"
                },
                class: "col-12 col-md-6 mt-4 mt-md-0",
                label: {
                    en: {
                        text: "Mother's Name",
                        placeholder: "Enter your mother's name"
                    },
                    guj: {
                        text: "માતાનું નામ",
                        placeholder: "તમારી માતાનું નામ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: []
                }
            } 
        ],
        [ 
            {
                type: "dropdown",
                subType: "select",
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
            }
        ]
    ],
    block2: [
        [ 
            { 
                type: "dropdown",
                subType: "select",
                name: "current_country",
                id: {
                    field_1: "current_country"
                },
                class: "col-12 col-md-6 col-lg-4",
                label: {
                    en: {
                        text: "Country",
                        placeholder: "Enter your country"
                    },
                    guj: {
                        text: "દેશ",
                        placeholder: "તમારો દેશ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            },
            { 
                type: "dropdown",
                subType: "select",
                name: "current_state",
                id: {
                    field_1: "current_state"
                },
                class: "col-12 col-md-6 col-lg-4",
                label: {
                    en: {
                        text: "State or Province",
                        placeholder: "Enter your state or province"
                    },
                    guj: {
                        text: "રાજ્ય અથવા પ્રાંત",
                        placeholder: "તમારો રાજ્ય અથવા પ્રાંત દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            },
            { 
                type: "dropdown",
                subType: "select",
                name: "current_district",
                id: {
                    field_1: "current_district"
                },
                class: "col-12 col-md-6 col-lg-4",
                label: {
                    en: {
                        text: "District",
                        placeholder: "Enter your district"
                    },
                    guj: {
                        text: "જિલ્લો",
                        placeholder: "તમારો જિલ્લો દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            } 
        ],
        [ 
            { 
                type: "dropdown",
                subType: "select",
                name: "current_taluka",
                id: {
                    field_1: "current_taluka"
                },
                class: "col-12 col-md-4",
                label: {
                    en: {
                        text: "Taluka or Tehsil",
                        placeholder: "Enter your taluka or tehsil"
                    },
                    guj: {
                        text: "તાલુકા અથવા તહસીલ",
                        placeholder: "તમારો તાલુકા અથવા તહસીલ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            },
            { 
                type: "dropdown",
                subType: "select",
                name: "current_city_village",
                id: {
                    field_1: "current_city_village"
                },
                class: "col-12 col-md-4",
                label: {
                    en: {
                        text: "City or Village",
                        placeholder: "Enter your city or village"
                    },
                    guj: {
                        text: "શહેર અથવા ગામ",
                        placeholder: "તમારો શહેર અથવા ગામ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            } 
        ]
    ],
    block3: [
        [ 
            { 
                type: "dropdown",
                subType: "select",
                name: "origin_country",
                id: {
                    field_1: "origin_country"
                },
                class: "col-12 col-md-6 col-lg-4",
                label: {
                    en: {
                        text: "Country",
                        placeholder: "Enter your country"
                    },
                    guj: {
                        text: "દેશ",
                        placeholder: "તમારો દેશ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            },
            { 
                type: "dropdown",
                subType: "select",
                name: "origin_state",
                id: {
                    field_1: "origin_state"
                },
                class: "col-12 col-md-6 col-lg-4",
                label: {
                    en: {
                        text: "State or Province",
                        placeholder: "Enter your state or province"
                    },
                    guj: {
                        text: "રાજ્ય અથવા પ્રાંત",
                        placeholder: "તમારો રાજ્ય અથવા પ્રાંત દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            },
            { 
                type: "dropdown",
                subType: "select",
                name: "origin_district",
                id: {
                    field_1: "origin_district"
                },
                class: "col-12 col-md-6 col-lg-4",
                label: {
                    en: {
                        text: "District",
                        placeholder: "Enter your district"
                    },
                    guj: {
                        text: "જિલ્લો",
                        placeholder: "તમારો જિલ્લો દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            } 
        ],
        [ 
            { 
                type: "dropdown",
                subType: "select",
                name: "origin_taluka",
                id: {
                    field_1: "origin_taluka"
                },
                class: "col-12 col-md-4",
                label: {
                    en: {
                        text: "Taluka or Tehsil",
                        placeholder: "Enter your taluka or tehsil"
                    },
                    guj: {
                        text: "તાલુકા અથવા તહસીલ",
                        placeholder: "તમારો તાલુકા અથવા તહસીલ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            },
            { 
                type: "dropdown",
                subType: "select",
                name: "origin_city_village",
                id: {
                    field_1: "origin_city_village"
                },
                class: "col-12 col-md-4",
                label: {
                    en: {
                        text: "City or Village",
                        placeholder: "Enter your city or village"
                    },
                    guj: {
                        text: "શહેર અથવા ગામ",
                        placeholder: "તમારો શહેર અથવા ગામ દાખલ કરો"
                    }
                },
                is_validate: {
                    flag: true,
                    criteria: null
                },
            } 
        ]
    ]
};

// Form button
export const pageFormButton = {
    submit: {
        name: "signin",
        id: "signin",
        class: "btn-primary btn-fill",
        label: {
            en: "Make changes",
            guj: "ફેરફારો કરો"
        }
    }
}