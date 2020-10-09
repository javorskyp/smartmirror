import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Websocket from '../components/Websocket';


export const LandingPage = () => (

<StyledTitle>
    <Websocket/>
    <p>Choose authlogin <Link to="/appstore">Appstore</Link></p>
</StyledTitle>
)


const StyledTitle =  styled.div `
width: 200px;
height: 100px;
margin:20px;
padding: 10px;
`