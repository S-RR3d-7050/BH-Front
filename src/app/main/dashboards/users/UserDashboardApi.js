import { createSelector } from '@reduxjs/toolkit';
import { apiService as api } from 'app/store/apiService';

export const addTagTypes = ['users_dashboard_widgets', 'project_dashboard_projects','users_dashboard_users','users_dashboard_encadrant','users_dashboard_interns'];
const UserDashboardApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getUserDashboardWidgets: build.query({
				query: () => ({ url: `/mock-api/dashboards/users/widgets` }),
				providesTags: ['users_dashboard_widgets']
			}),
			getProjectDashboardProjects: build.query({
				query: () => ({ url: `/mock-api/dashboards/project/projects` }),
				providesTags: ['project_dashboard_projects']
			}),
			getUserDashboardUsers: build.query({
				query: () => ({ url: `/mock-api/dashboards/users` }),
				providesTags: ['users_dashboard_users']
			}),
			getUserDashboardFormers : build.query({
				query: () => ({url: `/mock-api/dashboards/users/formers`}),
				providesTags: ['users_dashboard_encadrant']
			}),
			getUserDashboardInterns : build.query({
				query: () => ({url: `/mock-api/dashboards/users/interns`}),
				providesTags: ['users_dashboard_interns']
			})
		}),
		overrideExisting: false
	});
export default UserDashboardApi;
export const { useGetUserDashboardWidgetsQuery, useGetProjectDashboardProjectsQuery, useGetUserDashboardUsersQuery, useGetUserDashboardFormersQuery, useGetUserDashboardInternsQuery } = UserDashboardApi;
export const selectUserDashboardWidgets = createSelector(
	UserDashboardApi.endpoints.getUserDashboardWidgets.select(),
	(results) => results.data
);
export const selectWidget = (id) =>
	createSelector(selectUserDashboardWidgets, (widgets) => {
		return widgets?.[id];
	});
