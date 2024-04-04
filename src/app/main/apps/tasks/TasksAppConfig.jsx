import { lazy } from 'react';
import TaskForm from './task/TaskForm';
import { authRoles } from '../../../../app/auth';


const TasksApp = lazy(() => import('./TasksApp'));
/**
 * The tasks app config.
 */
const TasksAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/tasks',
			element: <TasksApp />,
			children: [
				{
					path: ':id',
					element: <TaskForm />
				},
				{
					path: ':id/:type',
					element: <TaskForm />
				}
			]
		}
	]
};
export default TasksAppConfig;
