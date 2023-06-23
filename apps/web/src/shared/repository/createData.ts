import { KeyURL } from "./type"
import { getContentType, withServerURL } from "./utils"

export async function createDataOld<T>(
    uri: KeyURL,
    data: T
): Promise<RepositoryResponse<T>> {
    const url = withServerURL(uri)
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": getContentType(data) },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Error on creating data")
    if (response.status == 200)
        return {
            ok: true,
            data: (await response.json()) as T,
        }
    return {
        ok: false,
        data: {} as T,
    }
}

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
