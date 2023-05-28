import Image from "next/image";
import { Td, Th } from "./components";
import { DeleteIcon, EditIcon } from "../icons";

export function Table({}: TableProps) {
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <Th>Nom</Th>
                    <Th>Rôles</Th>
                    <Th>Action</Th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <Image
                                        src="/images/avatar.png"
                                        width={48}
                                        height={48}
                                        alt="Avatar Tailwind CSS Component"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm opacity-50">
                                    tutoriel.mbl@gmail.com
                                </div>
                            </div>
                        </div>
                    </Td>
                    <Td>Super account Manager</Td>
                    <Td>
                        <div className="flex gap-2">
                            <span
                                className="text-blue-400 tooltip tooltip-bottom cursor-pointer"
                                data-tip="Modifier"
                            >
                                <EditIcon />
                            </span>
                            <span
                                className="text-red-400 tooltip tooltip-bottom cursor-pointer"
                                data-tip="Modifier"
                            >
                                <DeleteIcon />
                            </span>
                        </div>
                    </Td>
                </tr>
                <tr>
                    <Td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <Image
                                        src="/images/avatar.png"
                                        width={48}
                                        height={48}
                                        alt="Avatar Tailwind CSS Component"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Brice Swyre</div>
                                <div className="text-sm opacity-50">China</div>
                            </div>
                        </div>
                    </Td>
                    <Td>Super account Manager</Td>
                    <Td>Red</Td>
                </tr>
            </tbody>
        </table>
    );
}

type TableProps = {};
