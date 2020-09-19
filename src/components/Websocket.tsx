import React, { useState } from 'react';
import { TodoistTaskRo } from '../interfaces/ro/todoist-task-ro.interface';
import { WebsocketConnection } from './../utils/websocket';

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

    const addNewTask = () => {
        socket.send('/app/topic/newtask', {}, JSON.stringify({ "text": "To tylko test - nie przechwytuję tego na backendzie, ale w ten sposób wyglądałoby wysyłanie do serwera wiadomości np w chacie" }))
    }

    return (
        <div>
            <p>{task?.eventName}</p>
            <p>{task?.eventData.content}</p>
            <button onClick={addNewTask}>Dodaj nowe zadanie websocketem</button>
        </div>
    );
}

export default Websocket;
