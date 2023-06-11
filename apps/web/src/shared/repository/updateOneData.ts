import { KeyURL } from "./type"
import { getContentType, withServerURL } from "./utils"

export async function updateOneData<T>(
    uri: KeyURL,
    data: T
): Promise<RepositoryResponse<T>> {
    const url = withServerURL(uri)
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-type": getContentType(data) },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Error on udpating data")

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
