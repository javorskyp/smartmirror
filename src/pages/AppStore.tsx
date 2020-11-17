import React, { useContext, ReactElement } from 'react';
import { CLIENT_ID, CLIENT_SECRET, SCOPE } from '../env';
import { UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from './LoginPage/styled';
import { Link } from 'react-navi';
import AuthContext from './../context/auth-context';

const AppStore: React.FC = (): ReactElement => {
    const authContext = useContext(AuthContext);

    return (
        <div>
            <Link href="/">Go Back</Link>
            <UpperLeftCorner>
                <ULCTitle>INTEGRACJA</ULCTitle>
                <TitleLineUp />
                <TitleLineDown />
            </UpperLeftCorner>
            <div>
                <h4>Todoist</h4>
                {authContext.authenticated ? (
                    <span>Połączono</span>
                ) : (
                    <a
                        href={`https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&state=${CLIENT_SECRET}`}
                    >
                        Połącz
                    </a>
                )}
            </div>
        </div>
    );
};

export default AppStore;
