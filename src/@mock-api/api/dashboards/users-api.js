import mockApi from '../../mock-api.json';

const widgets = mockApi.components.examples.users_dashboard_widgets.value;
const projects = mockApi.components.examples.project_dashboard_projects.value;
const users = mockApi.components.examples.users_dashboard_users.value;
const formers = mockApi.components.examples.users_dashboard_encadrant.value;
const interns = mockApi.components.examples.users_dashboard_interns.value;
export const userDashboardApiMocks = (mock) => {
	mock.onGet('/dashboards/users/widgets').reply(() => {
		return [200, widgets];
	});
	mock.onGet('/dashboards/project/projects').reply(() => {
		return [200, projects];
	});
    mock.onGet('/dashboards/users').reply(()=>{
        return [200, users]
    });
    mock.onGet('/dashboards/users/formers').reply(()=>{
        return [200, formers]
    });
    mock.onGet('/dashboards/users/interns').reply(()=>{
        return [200, interns]
    });
};
