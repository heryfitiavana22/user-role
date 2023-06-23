import { useState } from "react"

export function useFormPermissions(defaultPermissions?: Permission[]) {
    const [permissions, setPermissions] = useState<Permission[]>(
        defaultPermissions ? defaultPermissions : []
    )

    return {
        permissions,
        addPermission: (service: string, action: CustomCRUD) => {
            const { otherServices, serviceInPermission } =
                filterPermissionsByService(permissions, service)

            const serviceUpdated: Permission = {
                service: service.toLowerCase(),
                actions:
                    serviceInPermission.length > 0
                        ? [...serviceInPermission[0].actions, action]
                        : [action],
            }

            setPermissions([...otherServices, serviceUpdated])
        },
        removePermission: (service: string, action: CustomCRUD) => {
            const { otherServices, serviceInPermission } =
                filterPermissionsByService(permissions, service)
            // si le service n'existe pas
            if (serviceInPermission.length == 0) return

            const serviceUpdated: Permission = {
                service,
                actions: serviceInPermission[0].actions.filter(
                    (a) => a !== action
                ),
            }
            // si tous les actions sont supprimés
            // on efface le service
            if (serviceUpdated.actions.length == 0)
                return setPermissions([...otherServices])
            setPermissions([...otherServices, serviceUpdated])
        },
    }
}

function filterPermissionsByService(
    permissions: Permission[],
    service: string
) {
    // rechercher s'il y a déjà le service dans les permissions
    const serviceInPermission = permissions.filter((p) => p.service == service)
    // enlever les autres services
    const otherServices = permissions.filter((p) => p.service !== service)

    return {
        serviceInPermission,
        otherServices,
    }
}
