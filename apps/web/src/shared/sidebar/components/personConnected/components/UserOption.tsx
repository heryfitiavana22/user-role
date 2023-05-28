"use client";

export function UserOption({ name, icon }: UserOptionProps) {
    return (
        <div className="py-2 px-2 rounded-lg flex gap-2 cursor-pointer transition-colors hover:bg-violet-100">
            <span className="text-violet-400">{icon}</span>
            <span>{name}</span>
        </div>
    );
}

type UserOptionProps = {
    name: string;
    icon?: React.ReactNode;
};
