import * as generator from "generate-password"

export function generatePassword() {
    return generator.generate()
}
