"use client"

export function UserOption({ name, icon, onClick }: UserOptionProps) {
    return (
        <div
            className="py-2 px-2 rounded-lg flex gap-2 cursor-pointer transition-colors hover:bg-violet-100"
            onClick={onClick}
        >
            <span className="text-primary">{icon}</span>
            <span>{name}</span>
        </div>
    )
}

type UserOptionProps = {
    name: string
    icon?: React.ReactNode
    onClick?: () => void
}
