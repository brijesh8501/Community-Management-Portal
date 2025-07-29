import registerNewAccountStore from "./account/registerNewAccount";
import forgotPasswordStore from "./account/forgotPassword";
import changePasswordStore from "./account/changePassword";
import loginStore from "./account/login";

export default {
    ...registerNewAccountStore,
    ...forgotPasswordStore,
    ...changePasswordStore,
    ...loginStore
}; 