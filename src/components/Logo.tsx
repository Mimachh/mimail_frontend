

interface Props {}

function Logo(props: Props) {
    const {} = props
    const appName = import.meta.env.VITE_APP_NAME;
    return (
        <div>
            <h1 className="font-clashMedium text-xl tracking-[0.11rem]">
                { appName }
            </h1>
        </div>

    )
}

export default Logo
