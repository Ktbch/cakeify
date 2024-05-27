

type ILayoutProps = {
    children: React.ReactNode
}
export default function layout({ children }: ILayoutProps) {
    return (
        <div className="max-w-7xl m-auto px-auto">
            {children}
        </div>
    )
}
