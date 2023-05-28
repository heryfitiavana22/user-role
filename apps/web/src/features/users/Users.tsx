import { Table } from "@/shared";

export function Users({}: UsersProps) {
    return (
        <div className="mt-5">
            <div className="overflow-x-auto w-full">
                <Table />
            </div>
        </div>
    );
}

type UsersProps = {};
