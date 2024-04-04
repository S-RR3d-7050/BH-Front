import { lazy } from 'react';
import { authRoles } from '../../../../app/auth';


const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));
/**
 * The ProjectDashboardApp configuration.
 */
const UsersDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/users',
			element: <ProjectDashboardApp />
		}
	]
};
export default UsersDashboardAppConfig;
