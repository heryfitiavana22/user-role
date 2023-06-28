import { Alert, Button } from "@/shared"
import { PropsWithChildren } from "react"

export function FooterFormRole({
    message,
    resultSubmit = "default",
    btnDisabled = false,
    type,
    onClick,
}: FooterFormRoleProps) {
    return (
        <div className="flex justify-between">
            <div>
                {message && (
                    <Alert type={resultSubmit}>
                        <span>{message}</span>
                    </Alert>
                )}
            </div>
            <Button type="submit" onClick={onClick} disabled={btnDisabled}>
                {type == "create" ? "Créer" : "Modifier"}
            </Button>
        </div>
    )
}

type FooterFormRoleProps = PropsWithChildren<{
    onClick?: () => void
    message: string
    resultSubmit?: Alert
    btnDisabled?: boolean
    type: CreateOrUpdate
}>
