interface Props {
    message?: string,
}

function ErrorMessage(props: Props) {
    const { message } = props;

    return (
        <p className='text-destructive text-sm font-clashLight italic'>
            {message}
        </p>
    )
}

export default ErrorMessage
