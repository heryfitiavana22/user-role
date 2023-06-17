"use client"
import { Button, CustomInput, Loading, getOneData } from "@/shared"
import { useForm } from "react-hook-form"
import { useUserSubmit } from "../hooks"
import { useQuery } from "@tanstack/react-query"
import { Message } from "./Message"

export function FormUser({ type, id, roles }: FormUserProps) {
    const { register, handleSubmit, reset } = useForm<UserForm>({
        defaultValues: { _id: id },
    })
    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => getOneData<User>("user", id || ""),
        enabled: !!id, // activé quand il y a un "id"
    })
    const { message, onSubmit } = useUserSubmit(type, reset)

    // ne vérifier que quand il y a un "id"
    if (!!id && isLoading) return <Loading />

    return (
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                label="Nom :"
                placeholder="nom"
                defaultValue={data?.name}
                register={register}
                name="name"
                required
            />
            <CustomInput
                label="Email :"
                placeholder="email"
                defaultValue={data?.email}
                register={register}
                name="email"
                required
            />
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Image :</span>
                </label>
                <input
                    type="file"
                    className="file-input file-input-primary file:text-white file-input-bordered w-full max-w-xs"
                    {...register("fileList")}
                />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Rôle :</span>
                </label>
                <select
                    className="select select-bordered"
                    defaultValue={data?.role.name}
                    {...register("role", { required: true })}
                >
                    {roles.map((role, k) => (
                        <option key={k} value={role._id}>
                            {role.name}
                        </option>
                    ))}
                </select>
            </div>

            <Button color={"pirmary"} className="mt-3">
                {type == "create" ? "Ajouter" : "Modifier"}
            </Button>
            <Message {...message} />
        </form>
    )
}

type FormUserProps = {
    type: CreateOrUpdate
    id?: string
    roles: Role[]
}
