import { KeyURL } from "./type"
import { withServerURL } from "./utils"

export async function deleteOneData<T>(
    uri: KeyURL,
    id: string
): Promise<RepositoryResponse<T>> {
    const url = withServerURL(uri, id)
    const response = await fetch(url, { method: "DELETE" })
    if (!response.ok) throw new Error("Error on deleting data")
    if (response.status == 200)
        return {
            ok: true,
            data: await response.json(),
        }
    return {
        ok: false,
        data: {} as T,
    }
}
