import { KeyURL } from "./type"
import { withServerURL } from "./utils"

export async function getAllData<T>(uri: KeyURL): Promise<T[]> {
    const url = withServerURL(uri)
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error on getting data")
    if (response.status == 200) return await response.json()
    return []
}
