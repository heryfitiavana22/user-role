"use client"
import { DeleteIcon, EditIcon, Table, TableAction, Td } from "@/shared"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { getAllData } from "repository"

export function Users({}: UsersProps) {
    const column = ["Nom", "Rôles", "Action"]
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => getAllData<User>("user"),
    })
    console.log("data");
    console.log(data);
    
    const dataOld: User[] = [
        {
            _id: "1",
            name: "Hart Hagerty",
            email: "tutoriel.mbl@gmail.com",
            imageURL: "/images/avatar.png",
            role: { name: "Super account Manager" } as any,
        },
    ]
    return (
        <div className="mt-5">
            <div className="w-full">
                <Table
                    column={column}
                    data={dataOld}
                    displayRow={(user) => (
                        <>
                            <Td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src={user.imageURL}
                                                width={48}
                                                height={48}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {user.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </Td>
                            <Td>{user.role.name}</Td>
                            <Td>
                                <div className="flex gap-2">
                                    <TableAction
                                        className="text-blue-400"
                                        href={`users/edit/` + user._id}
                                        datatip="Modifier"
                                    >
                                        <EditIcon />
                                    </TableAction>
                                    <TableAction
                                        className="text-red-400"
                                        href="#"
                                        datatip="Supprimer"
                                    >
                                        <DeleteIcon />
                                    </TableAction>
                                </div>
                            </Td>
                        </>
                    )}
                />
            </div>
        </div>
    )
}

type UsersProps = {}
