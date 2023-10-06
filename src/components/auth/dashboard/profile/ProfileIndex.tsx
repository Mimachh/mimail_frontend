import React from 'react'
import PersonnalInformation from './PersonnalInformation'
import UpdatePassword from './UpdatePassword'
import LogoutOtherSession from './LogoutOtherSession'
import DeleteAccount from './DeleteAccount'
import useAuthContext from '@/context/AuthContext'

interface Props {}

function ProfileIndex(props: Props) {
    const {} = props
    const { user, userLoading, hasRole } = useAuthContext() as AuthContextType;

    const isAuthorized = hasRole('User');
    return (
        <div className='bg-'>
            <div className="xl:pl-72">
                <main>
                    <div className="divide-y divide-muted-foreground/20">
                        <PersonnalInformation user={user}/>
                        <UpdatePassword />
                        <LogoutOtherSession />
                        <DeleteAccount />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProfileIndex
