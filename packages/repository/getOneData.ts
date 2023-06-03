import { KeyURL } from "./type"

export async function getOneData(url: KeyURL, id: string) {
    const response = await fetch(url + id)
    if (response.status == 200) return (await response.json())[0] || {}
    return {}
}
