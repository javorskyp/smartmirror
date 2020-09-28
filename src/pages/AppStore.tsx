import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, SCOPE } from '../env';

const AppStore = () => {
    return (
        <div>
            <a href={`https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&state=${CLIENT_SECRET}`}>
                Todoist
            </a>
        </div>
    )

}

export default AppStore;