const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export function withServerURL(...uri: URIParams[]) {
    return `${SERVER_URL}/${uri.join("/")}`
}

type URIParams = string | number | symbol
