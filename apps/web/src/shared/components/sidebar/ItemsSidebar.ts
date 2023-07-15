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
        name: "Forum",
        link: Routes.forum(),
        service: "forum",
        Icon: ForumIcon,
    },
    {
        name: "Post",
        link: Routes.post(),
        service: "post",
        Icon: PostIcon,
    },
    {
        name: "Newsletter",
        link: Routes.newsletter(),
        service: "newsletter",
        Icon: NewsLetterIcon,
    },
    {
        name: "Statistiques",
        link: Routes.statistics(),
        service: "statistics",
        Icon: StatisticsIcon,
    },
]
