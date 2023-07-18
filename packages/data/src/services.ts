export const services = {
    dashboard: "dashboard",
    roles: "roles",
    users: "users",
    forum: "forum",
    post: "post",
    newsletter: "newsletter",
    statistics: "statistics",
} as const

export const servicesList = Object.keys(services)
