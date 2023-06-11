import classNames from "classnames"

export function Message({ success, text }: MessageProps) {
    return (
        <>
            {text && (
                <p
                    className={classNames(
                        "my-3 transition-all",
                        success ? "text-success" : "text-error"
                    )}
                >
                    {text}
                </p>
            )}
        </>
    )
}

type MessageProps = {
    success: boolean
    text: string
}
