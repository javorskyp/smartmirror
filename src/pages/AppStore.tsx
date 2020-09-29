import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, SCOPE } from '../env';
import { UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from '../components/Auth.components';
const AppStore = () => {
    return (
        <div>
            <UpperLeftCorner>
                <ULCTitle>INTEGRACJA</ULCTitle>
                <TitleLineUp/>
                <TitleLineDown/>
            </UpperLeftCorner>
            <a href={`https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&state=${CLIENT_SECRET}`}>
                Todoist
            </a>
        </div>
    )

}

export default AppStore;