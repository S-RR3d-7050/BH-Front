import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { authRoles } from '../auth';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig = [
	{
		id: 'dashboards',
		title: 'Dashboard',
		subtitle: 'Bienvenue sur les tableaux de bord',
		type: 'group',
		icon: 'heroicons-outline:home',
		translate: 'DASHBOARD',
		auth: authRoles.admin,//['admin']
		children: [
			{
				id: 'dashboards.users',
				title: 'Users',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/dashboards/users'
			},
			{
				id: 'dashboards.applications',
				title: 'Applications',
				type: 'item',
				icon: 'heroicons-outline:briefcase',
				url: '/dashboards/applications'
			},
			{
				id: 'dashboards.projects',
				title: 'Projects',
				type: 'item',
				icon: 'heroicons-outline:document',
				url: '/dashboards/projects'
			}
		]
	},
	{
		id: 'apps',
		title: 'Applications',
	
		type: 'group',
		icon: 'heroicons-outline:cube',
		translate: 'APPLICATIONS',
		auth: authRoles.staff,//['admin']
		children: [
			{
				id: 'apps.calendar',
				title: 'Calendrier',
				subtitle: 'Vérifiez vos événements à venir',
				type: 'item',
				icon: 'heroicons-outline:calendar',
				url: '/apps/calendar',
				translate: 'CALANDRIER'
			},
			{
				id: 'apps.file-manager',
				title: 'Gestionnaire de fichiers',
				type: 'item',
				icon: 'heroicons-outline:cloud',
				url: '/apps/file-manager',
				end: true,
				translate: 'GEST_FICHIER'
			},
			{
				id: 'apps.notes',
				title: 'Notes',
				type: 'item',
				icon: 'heroicons-outline:pencil-alt',
				url: '/apps/notes',
				translate: 'NOTES'
			},
			{
				id: 'apps.scrumboard',
				title: 'Tableau Scrum',
				type: 'item',
				icon: 'heroicons-outline:view-boards',
				url: '/apps/scrumboard',
				translate: 'SCRUMBOARD'
			},
			{
				id: 'apps.tasks',
				title: 'Tâches',
				subtitle: '12 remaining tasks',
				type: 'item',
				icon: 'heroicons-outline:check-circle',
				url: '/apps/tasks',
				translate: 'TACHES'
			},
		]
	}
];
export default navigationConfig;
