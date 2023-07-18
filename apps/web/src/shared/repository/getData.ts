import { KeyURL } from "./type"
import { withServerURL } from "./utils"

export async function getAllData<T>(
    uri: KeyURL,
    cache: RequestCache = "default"
): Promise<T[]> {
    const url = withServerURL(uri)
    const response = await fetch(url, { cache })
    if (!response.ok) throw new Error("Erreur lors de la récupération")
    if (response.status == 200) return await response.json()
    return []
}

export async function getAllDataBy<T>(
    uri: KeyURL,
    by: keyof T,
    value: string,
    cache: RequestCache = "default"
): Promise<T[]> {
    const url = withServerURL(uri, by, value)
    const response = await fetch(url, { cache })
    if (!response.ok) throw new Error("Erreur lors de la récupération")
    if (response.status == 200) return await response.json()
    return []
}

export async function getOneData<T>(
    uri: KeyURL,
    id: string,
    cache: RequestCache = "default"
): Promise<T | null> {
    const url = withServerURL(uri, id)
    const response = await fetch(url, { cache })
    if (!response.ok) throw new Error("Erreur lors de la récupération")
    if (response.status == 200) return await response.json()
    return {} as T
}

export async function getOneDataBy<T>(
    uri: KeyURL,
    by: keyof T,
    value: string,
    cache: RequestCache = "default"
): Promise<T | undefined> {
    // la réponse est un tableau,
    return (await getAllDataBy<T>(uri, by, value, cache))[0]
}
