import "./global.css"
export function Button({children}: {children: React.ReactNode}) {
    return (
        <div className="text-black">
            {children}
        </div>
    )
}