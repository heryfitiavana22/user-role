import { FormUser } from '@/features'

export default function Page({}: PageProps) {
    return (
        <div>
            <h3 className="text-xl font-semibold">Ajouter un utilisateur</h3>
            <FormUser type="create" />
        </div>
    )
}

type PageProps = {}
