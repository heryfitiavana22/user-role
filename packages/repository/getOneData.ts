import { KeyURL } from "./type"

export async function getOneData<T>(url: KeyURL, id: string): Promise<T> {
    const response = await fetch(url + id)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return (await response.json())[0] || {}
    return {} as T
}
