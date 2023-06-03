import { KeyURL } from "./type"

export async function getAllData(url: KeyURL) {
    const response = await fetch(url)
    if (response.status == 200) return await response.json()
    return []
}
