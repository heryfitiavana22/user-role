'use client'
import { Button, CustomInput } from '@/shared'
import { useForm } from 'react-hook-form'
import { useUserSubmit } from '../hooks'

export function FormUser({ type, id }: FormUserProps) {
    const { register, handleSubmit } = useForm<UserForm>()
    const { onSubmit } = useUserSubmit(type)

    return (
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                label="Nom :"
                placeholder="nom"
                register={register}
                name="name"
                required
            />
            <CustomInput
                label="Email :"
                placeholder="email"
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
                    className="file-input file-input-primary file-input-bordered w-full max-w-xs"
                    {...register('fileList')}
                />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Rôle :</span>
                </label>
                <select
                    className="select select-bordered"
                    {...register('role', { required: true })}
                >
                    <option>Super account</option>
                    <option>Manager</option>
                </select>
            </div>
            <Button color={'pirmary'} className="mt-3">
                {type == 'create' ? 'Ajouter' : 'Modifier'}
            </Button>
        </form>
    )
}

type FormUserProps = {
    type: CreateOrUpdate
    id?: string
}
