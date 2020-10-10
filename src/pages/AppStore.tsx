import React from 'react';
import { connect } from 'react-redux';
import { CLIENT_ID, CLIENT_SECRET, SCOPE } from '../env';
import { UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from './LoginPage/styled';
import { Link } from 'react-navi';

const AppStore = (props) => {
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
                {!!props.configuration?.todoist ? <span>Połączono</span> : <a href={`https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&state=${CLIENT_SECRET}`}>
                    Połącz
                </a>}
            </div>

        </div>
    )

}

const mapStateToProps = state => {
    return {
        configuration: state.authReducer.configuration
    }
}

export default connect(mapStateToProps)(AppStore);