import React from 'react';

const AuthContext = React.createContext({
    authenticated: false,
    token: '',
});

export default AuthContext;
