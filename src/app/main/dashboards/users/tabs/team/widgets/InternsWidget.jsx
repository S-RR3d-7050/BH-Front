import { memo, useEffect, useState } from 'react';
//import ReactApexChart from 'react-apexcharts';
//import Box from '@mui/material/Box';
//import FuseLoading from '@fuse/core/FuseLoading';
//import { useGetUserDashboardWidgetsQuery } from '../../../UserDashboardApi';
import InternsTable from '../datatable/InternsTable';
/**
 * The GithubIssuesWidget widget.
 */
function InternsWidget() {
	return (
		<div className="w-full h-full container flex flex-col">
		<InternsTable />
		</div>
	);
}

export default memo(InternsWidget);
