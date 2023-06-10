import { KeyURL } from "./type"

export async function getAllData<T>(url: KeyURL): Promise<T[]> {
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return await response.json()
    return []
}
