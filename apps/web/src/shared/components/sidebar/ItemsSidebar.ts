import { Routes } from "@/Routes"
import {
    DashboardIcon,
    ForumIcon,
    NewsLetterIcon,
    PostIcon,
    RoleIcon,
    StatisticsIcon,
    UsersIcon,
} from "../icons"
import { services } from "data"

export const ItemsSidebar = [
    {
        name: "Dashboard",
        link: Routes.dashboard(),
        service: services.dashboard,
        Icon: DashboardIcon,
    },
    {
        name: "Rôles",
        link: Routes.roles(),
        service: services.roles,
        Icon: RoleIcon,
    },
    {
        name: "Utilisateurs",
        link: Routes.users(),
        service: services.users,
        Icon: UsersIcon,
    },
    {
        name: "Forum",
        link: Routes.forum(),
        service: services.forum,
        Icon: ForumIcon,
    },
    {
        name: "Post",
        link: Routes.post(),
        service: services.post,
        Icon: PostIcon,
    },
    {
        name: "Newsletter",
        link: Routes.newsletter(),
        service: services.newsletter,
        Icon: NewsLetterIcon,
    },
    {
        name: "Statistiques",
        link: Routes.statistics(),
        service: services.statistics,
        Icon: StatisticsIcon,
    },
]
