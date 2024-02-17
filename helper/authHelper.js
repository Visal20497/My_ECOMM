import bcrypt from 'bcrypt'
// this helper  to generate the encrypt passoword
export function encryptPassword(password) {
    let slat = 10
    let hashedPass = bcrypt.hash(password, slat)
    return hashedPass
}
export let matchPassword = async (passoword, hashPassword
) => {
    return bcrypt.compare(passoword, hashPassword)
}
