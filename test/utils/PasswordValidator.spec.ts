import {describe, expect, test} from "@jest/globals";

import {SecurityLevel} from "../../src/utils/PasswordValidator";
import {PasswordValidator} from "../../src/utils/PasswordValidator";

describe("Password validator will assess a password and return the security level base in a criteria", () => {
    test("If password has less than 8 characters it will be WEAK", () => {
        expect(PasswordValidator.assessPassword("abcdefg")).toBe(SecurityLevel.WEAK);
    });

    test("If password has only lower and upper letters it will be WEAK", () => {
        expect(PasswordValidator.assessPassword("AbCdEfGh")).toBe(SecurityLevel.WEAK);
    });

    test("If password has lower, upper letters and numbers it will be MEDIUM", () => {
        expect(PasswordValidator.assessPassword("Ab1Cd2Ef3Gh4")).toBe(SecurityLevel.MEDIUM);
    });

    test("If password has lower, upper letters, numbers and other characters it will be STRONG", () => {
        expect(PasswordValidator.assessPassword("Ab1Cd2Ef3Gh4.")).toBe(SecurityLevel.STRONG);
    });
});
