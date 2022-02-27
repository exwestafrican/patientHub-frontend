


export function matchingStrings(password, confirmPassword) {
    return password === confirmPassword;
}

export default function cleanData(data) {
    return data.replaceAll(' ', '').toLowerCase()
}