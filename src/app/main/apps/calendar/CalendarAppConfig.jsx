import { lazy } from 'react';
import { authRoles } from '../../../../app/auth';

const CalendarApp = lazy(() => import('./CalendarApp'));
/**
 * The Calendar App Config.
 */
const CalendarAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'apps/calendar',
			element: <CalendarApp />
		}
	]
};
export default CalendarAppConfig;
