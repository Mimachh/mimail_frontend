interface HeadingProps {
    title: string;
    description: string;
}

export const HeadingDashboard: React.FC<HeadingProps> = ({
    title,
    description
}) => {


    return (
        <div>
            <h2 className="text-lg md:text-3xl font-clashSemiBold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}

export default HeadingDashboard
