export const enum SecurityLevel {
    WEAK,
    MEDIUM,
    STRONG
}
export class PasswordValidator {
    public static assessPassword(password: string): SecurityLevel {

        if (password.length < 8) {
            return SecurityLevel.WEAK;
        }

        if (password.match(/^[a-zA-Z]+$/)) {
            return SecurityLevel.WEAK;
        }

        if (password.match(/^[a-zA-Z0-9]+$/)) {
            return SecurityLevel.MEDIUM;
        }

        return SecurityLevel.STRONG;
    }
}
