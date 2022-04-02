export const TaskStatus = Object.freeze({
  COMPLETED: 'done',
  IN_PROGRESS: 'InQA',
  NOT_STARTED: 'todo',
});

export const tasks = [
  {
    id: 1,
    title: 'Create branding guide for React Master project.',
    status: TaskStatus.COMPLETED,
    description: 'Create branding guide for React Master project.',
  },
  {
    id: 2,
    title: 'Create branding guide for React Master project. 2',
    status: TaskStatus.IN_PROGRESS,
    description: 'Create branding guide for React Master project. 2',
  },
  {
    id: 3,
    title: 'Create branding guide for React Master project. 3',
    status: TaskStatus.IN_PROGRESS,
    description: 'Create branding guide for React Master project. 3',
  },
  {
    id: 4,
    title: 'Create branding guide for React Master project. 4',
    status: TaskStatus.NOT_STARTED,
    description: 'Create branding guide for React Master project. 4',
  },
  {
    id: 5,
    title: 'Create branding guide for React Master project. 5',
    status: TaskStatus.NOT_STARTED,
    description: 'Create branding guide for React Master project. 5',
  },
];