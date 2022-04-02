export interface TaskStateType {
    tasks: taskType[];
}

export type taskType = {
    id: number | string;
    title: string;
    description: string;
    status: 'todo' | 'blocked' | 'InProgress' | 'InQA' | 'done';
}

export interface ChildrenProps {
    children: React.ReactElement | React.ReactElement[];
}
