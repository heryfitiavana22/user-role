import { KeyURL } from "./type"
import { withServerURL } from "./utils"

export async function getOneData<T>(uri: KeyURL, id: string): Promise<T> {
    const url = withServerURL(uri, id)
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return await response.json()
    return {} as T
}
