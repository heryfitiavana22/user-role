import { KeyURL } from "./type"
import { withServerURL } from "./utils"

export async function getAllData<T>(uri: KeyURL): Promise<T[]> {
    const url = withServerURL(uri)
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return await response.json()
    return []
}

export async function getAllDataBy<T>(
    uri: KeyURL,
    by: keyof T,
    value: string
): Promise<T[]> {
    const url = withServerURL(uri, by, value)
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return await response.json()
    return []
}

export async function getOneData<T>(
    uri: KeyURL,
    id: string
): Promise<T | null> {
    const url = withServerURL(uri, id)
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return await response.json()
    return {} as T
}

export async function getOneDataBy<T>(
    uri: KeyURL,
    by: keyof T,
    value: string
): Promise<T | undefined> {
    // la réponse est un tableau,
    return (await getAllDataBy<T>(uri, by, value))[0]
}
