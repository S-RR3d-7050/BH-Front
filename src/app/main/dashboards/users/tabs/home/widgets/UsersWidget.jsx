//import Paper from '@mui/material/Paper';
//import { lighten, useTheme } from '@mui/material/styles';
//import Tab from '@mui/material/Tab';
//import Tabs from '@mui/material/Tabs';
//import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
//import ReactApexChart from 'react-apexcharts';
//import Box from '@mui/material/Box';
//import FuseLoading from '@fuse/core/FuseLoading';
//import { useGetUserDashboardWidgetsQuery } from '../../../UserDashboardApi';
import UsersTable from '../datatable/UsersTable';


/**
 * The GithubIssuesWidget widget.
 */
function UsersWidget() {
	return (
		<div className="w-full h-full container flex flex-col">
		<UsersTable />
		</div>
	);
}

export default memo(UsersWidget);
