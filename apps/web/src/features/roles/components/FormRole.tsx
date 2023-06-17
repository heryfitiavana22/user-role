"use client"
import { CustomInput } from "@/shared"
import { PropsWithChildren } from "react"
import { useForm } from "react-hook-form"
import {
    Checkbox,
    FooterFormRole,
    ItemRowForm,
    RowForm,
} from "./FormComponents"

export function FormRole({ type, id, services }: FormRoleProps) {
    const { register } = useForm<Role>()
    const customCrud = ["Ajout", "Lire", "Edition", "Suppression", "Tous"]

    return (
        <form className="mt-5">
            <CustomInput
                label="Rôle"
                placeholder="nom du rôle"
                required
                register={register}
                name="name"
            />
            <div className="mt-4">
                <label>Accès</label>
                <div className="mt-2 p-2">
                    <RowForm className="font-bold">
                        <ItemRowForm>Service</ItemRowForm>
                        {customCrud.map((e, k) => (
                            <ItemRowForm center key={k}>
                                {e}
                            </ItemRowForm>
                        ))}
                    </RowForm>
                    {services.map((service, k) => (
                        <RowForm className="py-4" key={k}>
                            <ItemRowForm className="text-sm">
                                {service}
                            </ItemRowForm>
                            {[0, 1, 2, 3, 4].map((e) => (
                                <ItemRowForm center key={e}>
                                    <Checkbox />
                                </ItemRowForm>
                            ))}
                        </RowForm>
                    ))}
                </div>
            </div>
            <FooterFormRole />
        </form>
    )
}

type FormRoleProps = PropsWithChildren<{
    type: CreateOrUpdate
    id?: string
    services: string[]
}>
