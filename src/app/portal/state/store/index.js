
// Import store files
import registerNewAccountStore from "./account/registerNewAccount";
import forgotPasswordStore from "./account/forgotPassword";
import changePasswordStore from "./account/changePassword";
import loginStore from "./account/login";

// Merge store files to single object
export default {
    ...registerNewAccountStore,
    ...forgotPasswordStore,
    ...changePasswordStore,
    ...loginStore
}; 