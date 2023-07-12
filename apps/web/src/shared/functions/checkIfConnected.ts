import { Routes } from "@/Routes"
import { authOptions } from "@/config"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export async function checkIfNotConnected() {
    const session = await getServerSession(authOptions)
    if (!session) redirect(Routes.login())
}

export async function checkIfConnected() {
    const session = await getServerSession(authOptions)
    if (session) redirect(Routes.dashboard())
}
