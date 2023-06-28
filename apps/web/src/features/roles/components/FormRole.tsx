"use client"
import { CustomInput, Loading, getOneData } from "@/shared"
import { PropsWithChildren } from "react"
import { useForm } from "react-hook-form"
import { ItemRowForm, RowForm } from "./RowComponents"
import { Checkbox } from "./Checkbox"
import { FooterFormRole } from "./FooterFormRole"
import { useFormPermissions, useFormSubmit } from "../hooks"
import { flatRolesAccess, isServiceActionInRolesFlatted } from "../roles.helper"
import { useQuery } from "@tanstack/react-query"

const crudTitle = ["Ajout", "Lire", "Edition", "Suppression", "Tous"]
const customCrud: CustomCRUD[] = ["create", "read", "update", "delete", "all"]

export function FormRole({ type, services, id }: FormRoleProps) {
    const { data: currentRole, isLoading } = useQuery({
        queryKey: ["currentRole"],
        queryFn: () => getOneData<Role>("role", id || ""),
        enabled: !!id, // activé quand il y a un id
        cacheTime: 0,
    })
    const rolesFlatted = flatRolesAccess(
        currentRole ? [currentRole] : undefined
    )
    const { register, handleSubmit } = useForm<Role>({
        defaultValues: { _id: id },
    })
    const { permissions, addPermission, removePermission, resetPermission } =
        useFormPermissions(currentRole?.permissions)
    const {
        isClicked,
        message,
        type: resultSubmit,
        onSubmit,
    } = useFormSubmit(type, resetPermission)

    if (!!id && isLoading) return <Loading />

    return (
        <form className="mt-5" onSubmit={handleSubmit(onSubmit(permissions))}>
            <CustomInput
                label="Rôle"
                placeholder="nom du rôle"
                required
                register={register}
                name="name"
                defaultValue={currentRole?.name}
            />
            <div className="mt-4">
                <label>Accès</label>
                <div className="mt-2 p-2">
                    <RowForm className="font-bold">
                        <ItemRowForm>Service</ItemRowForm>
                        {crudTitle.map((e, k) => (
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
                            {customCrud.map((action, k) => (
                                <ItemRowForm center key={k}>
                                    <Checkbox
                                        onChecked={() =>
                                            addPermission(service, action)
                                        }
                                        onUnChecked={() =>
                                            removePermission(service, action)
                                        }
                                        checked={isServiceActionInRolesFlatted(
                                            service,
                                            action,
                                            rolesFlatted
                                        )}
                                    />
                                </ItemRowForm>
                            ))}
                        </RowForm>
                    ))}
                </div>
            </div>
            <FooterFormRole
                message={message}
                resultSubmit={resultSubmit}
                btnDisabled={isClicked}
                type={type}
            />
            {isClicked && <Loading />}
        </form>
    )
}

type FormRoleProps = PropsWithChildren<{
    type: CreateOrUpdate
    id?: string
    services: string[]
}>
