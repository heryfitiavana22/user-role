import { SubmitHandler } from 'react-hook-form'

export function useUserSubmit(type: CreateOrUpdate) {
    const onSubmit: SubmitHandler<UserForm> = (user) => {
        console.log(user)
    }

    return {
        onSubmit,
    }
}
