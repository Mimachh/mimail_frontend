import useAuthContext from '@/context/AuthContext';
import React from 'react'

interface Props {}

function Dashboard(props: Props): React.ReactElement  {
    const {} = props

    const { user, userLoading } = useAuthContext() as AuthContextType;

    return (
        <>Dashboard</>
    )
}

export default Dashboard
