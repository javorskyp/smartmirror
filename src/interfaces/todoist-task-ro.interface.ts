export interface TodoistTaskRo {
    event_name: string;
    user_id: number;
    event_data: {
        added_by_uid: string;
        assigned_by_uid: string;
        checked: boolean;
        child_order: number;
        collapsed: boolean;
        content: string;
        date_added: string;
        day_order: string;
        due: string;
        has_notifications: string;
        id: number;
        in_history: number;
        is_deleted: boolean;
        labels: string[];
        parent_id: number;
        priority: number;
        project_id: number;
        responsible_uid: number;
        sync_id: number;
        user_id: number;
    };
}