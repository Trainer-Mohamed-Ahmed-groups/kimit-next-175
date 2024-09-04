
export default function Layout({ children, one }) {
    return (
        <div>
            <div>Layout</div>
            {one}
            {children}
        </div>
    )
}
