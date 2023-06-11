const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export function withServerURL(...uri: string[]) {
    return `${SERVER_URL}/${uri.join("/")}`
}
