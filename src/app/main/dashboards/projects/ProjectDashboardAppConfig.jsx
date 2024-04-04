import { lazy } from 'react';
import { authRoles } from '../../../../app/auth';


//const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));
const ComingSoonApp = lazy(() => import('./ComingSoonApp'));
/**
 * The ProjectDashboardApp configuration.
 */
const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/projects',
			element: <ComingSoonApp />
		}
	]
};
export default ProjectDashboardAppConfig;
