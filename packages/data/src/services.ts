export const services = {
    dashboard: "dashboard",
    users: "users",
    roles: "roles",
    forum: "forum",
    post: "post",
    newsletter: "newsletter",
    statistics: "statistics",
} as const

export const servicesList = Object.keys(services)
