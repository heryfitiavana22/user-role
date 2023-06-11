export function Loading({}: LoadingProps) {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen grid place-items-center text-primary">
            <div className="flex items-center">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        </div>
    )
}

type LoadingProps = {}
