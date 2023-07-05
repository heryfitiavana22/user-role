import { Routes } from "@/Routes"
import { DashboardIcon, RoleIcon, StatisticsIcon, UsersIcon } from "../icons"

export const ItemsSidebar = [
    {
        name: "Dashboard",
        link: Routes.dashboard(),
        service: "dashboard",
        Icon: DashboardIcon,
    },
    {
        name: "Utilisateurs",
        link: Routes.users(),
        service: "users",
        Icon: UsersIcon,
    },
    {
        name: "Rôles",
        link: Routes.roles(),
        service: "roles",
        Icon: RoleIcon,
    },
    {
        name: "Statistiques",
        link: Routes.statistics(),
        service: "statistics",
        Icon: StatisticsIcon,
    },
]
