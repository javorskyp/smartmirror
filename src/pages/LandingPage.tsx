import React from 'react';
import Websocket from '../components/Websocket';
import TodoistTasks from '../components/TodoistTasks';


export const LandingPage = () => (
    <div>
        <Websocket />
        <TodoistTasks />
    </div>
)