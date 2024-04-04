import { lazy } from 'react';
import { authRoles } from '../../../../app/auth';

const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));
const ComingSoonApp = lazy(() => import('./ComingSoonApp'));
/**
 * The ProjectDashboardApp configuration.
 */
const ApplicationsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/applications',
			element: <ComingSoonApp />
		}
	]
};
export default ApplicationsDashboardAppConfig;
