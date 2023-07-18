import { KeyURL } from "./type"
import { getContentType, withServerURL } from "./utils"

export async function updateOneData<T>(uri: KeyURL, data: T): Promise<T> {
    const url = withServerURL(uri)
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-type": getContentType(data) },
        body: JSON.stringify(data),
    })

    const responseJSON = await response.json()
    if (!response.ok)
        throw new Error(
            responseJSON?.message || "Erreur lors de la modification"
        )
    return responseJSON
}
