export interface TodoistTaskEventRo {
    eventName: string;
    userId: number;
    eventData: {
        addedByUid: string;
        assignedByUid: string;
        checked: boolean;
        childOrder: number;
        collapsed: boolean;
        content: string;
        dateAdded: string;
        dayOrder: string;
        due: string;
        hasNotifications: string;
        id: number;
        inHistory: number;
        isDeleted: boolean;
        labels: string[];
        parentId: number;
        priority: number;
        projectId: number;
        responsibleUid: number;
        syncId: number;
        userId: number;
    };
}