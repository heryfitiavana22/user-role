const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export function staticURL(uri: string) {
    return `${SERVER_URL}/static${uri}`
}
