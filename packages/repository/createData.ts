import { KeyURL } from "./type"
import { getContentType } from "./utils"

export async function createData<T>(url: KeyURL, data: T) {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": getContentType(data) },
        body: JSON.stringify(data),
    })
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
