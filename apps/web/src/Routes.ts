export const Routes = {
    dashboard: () => "/dashboard",
    users: () => "/users",
    editUser: (id: string) => `users/edit/${id}`,
    addUser: () => `users/add`,
    roles: () => "/roles",
    editRole: (id: string) => `roles/edit/${id}`,
    addRole: () => `roles/add`,
    statistics: () => "/statistics"
} as const
