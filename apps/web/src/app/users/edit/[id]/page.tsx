import { FormUser } from '@/features'

export default function Page({ params }: PageProps) {
    return (
        <div>
            <h3 className="text-xl font-semibold">Modifier l'utilisateur</h3>
            <FormUser type="update" id={params.id} />
        </div>
    )
}

type PageProps = {
    params: {
        id: string
    }
}
