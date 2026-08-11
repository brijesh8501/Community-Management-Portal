// Form configuration
import { FORM_CONFIG } from "../form";

export const LOGIN_CONFIG = {
    formFields: {
        email: {
            label: "Email Address",
            key: "email",
            placeholder: "Enter your email address",
            format: FORM_CONFIG.formatter.lowercase,
            required: true,
            validation: [ FORM_CONFIG.validator.email ]
        },
        password: {
            label: "Password",
            key: "password",
            placeholder: "Enter your password",
            format: null,
            required: true,
            validation: []
        }
    }
} as const;