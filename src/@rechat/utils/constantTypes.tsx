export interface TaskStateType {
    tasks: taskType[];
}

export interface HistoryType {
    history: taskType;
}

export type taskType = {
    id: number | string;
    title: string;
    description: string;
    status: 'todo' | 'blocked' | 'InProgress' | 'InQA' | 'done';
    history?: object;
}

export interface ChildrenProps {
    children: React.ReactElement | React.ReactElement[];
}
