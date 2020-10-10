export interface TodoistTaskRo {
    commentCount: string;
    completed: boolean;
    content: string;
    created: string;
    id: number;
    labelIds: number[];
    order: number;
    priority: number;
    projectId: number;
    sectionId: number;
    url: string;
}