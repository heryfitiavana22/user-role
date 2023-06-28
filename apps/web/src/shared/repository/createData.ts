import { KeyURL } from "./type"
import { getContentType, withServerURL } from "./utils"

export async function createData<T>(uri: KeyURL, data: T): Promise<T> {
    const url = withServerURL(uri)
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": getContentType(data) },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Error on creating data")
    return (await response.json()) as T
}
