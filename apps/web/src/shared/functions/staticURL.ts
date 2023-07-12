const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export function staticURL(uri: string) {
    // console.log(`${SERVER_URL}/static${uri}`);

    return `${SERVER_URL}/static${uri}`
}

export function staticImageURL(uri = "/images/user/avatar.png") {
    return staticURL(uri)
}
