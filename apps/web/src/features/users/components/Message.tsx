import { Alert } from "@/shared"

export function Message({ text, type = "default" }: MessageProps) {
    return (
        <>
            {text && (
                <div className="w-fit mt-3">
                    <Alert type={type}>{text}</Alert>
                </div>
            )}
        </>
    )
}

type MessageProps = {
    text: string
    type?: Alert
}
