import { KeyURL } from "./type"
import { withServerURL } from "./utils"

export async function deleteOneData<T>(uri: KeyURL, id: string): Promise<T> {
    const url = withServerURL(uri, id)
    const response = await fetch(url, { method: "DELETE" })
    if (!response.ok) throw new Error("Error on deleting data")

    return await response.json()
}
