import { memo, useEffect, useState } from 'react';
//import ReactApexChart from 'react-apexcharts';
//import Box from '@mui/material/Box';
//import FuseLoading from '@fuse/core/FuseLoading';
//import { useGetUserDashboardWidgetsQuery } from '../../../UserDashboardApi';
import FormersTable from '../datatable/FormersTable';

/**
 * The GithubIssuesWidget widget.
 */
function FormersWidget() {
	return (
		<div className="w-full h-full container flex flex-col">
		<FormersTable />
		</div>
	);
}

export default memo(FormersWidget);
