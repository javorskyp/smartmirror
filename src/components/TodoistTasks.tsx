import React, { useEffect, useState } from 'react';
import { TodoistTaskRo } from '../interfaces/ro/todoist-task-ro.interface';
import * as todoistService from '../services/todoist-service';

function TodoistTasks() {
    const [tasks, setTasks] = useState<TodoistTaskRo[]>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await todoistService.fetchTasks();
            setTasks(response.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            {tasks?.map((task) => (
                <div key={task.id}>
                    {' '}
                    {task.id} {task.content} <a href={task.url}>Link do zadania w Todoist</a> {task.created}
                </div>
            ))}
        </div>
    );
}

export default TodoistTasks;
