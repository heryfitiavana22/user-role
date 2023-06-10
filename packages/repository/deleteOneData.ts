import { KeyURL } from "./type"

export async function deleteOneData(url: KeyURL, id: string) {
    const response = await fetch(`${url}/${id}`, { method: "DELETE" })
    if(!response.ok)  throw new Error("Error on deleting data")
    if (response.status == 200)
        return {
            ok: true,
            data: await response.json(),
        }
    return {
        ok: false,
        data: {},
    }
}
