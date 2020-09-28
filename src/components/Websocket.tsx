import React, { useState } from 'react';
import { TodoistTaskRo } from '../interfaces/ro/todoist-task-ro.interface';
import { WebsocketConnection } from '../utils/websocket';

function Websocket() {
    const [task, setTask] = useState<TodoistTaskRo | undefined>();

    const socket = WebsocketConnection.getInstance();

    socket.connect({}, function (frame: any) {
        socket.subscribe('/topic/jkwolanin@gmail.com', tasks => {
            const task = JSON.parse(tasks.body);
            console.log(task);
            setTask(task);
        })
    });

    return (
        <div>
            <p>{task?.eventName}</p>
            <p>{task?.eventData.content}</p>
        </div>
    );
}

export default Websocket;
