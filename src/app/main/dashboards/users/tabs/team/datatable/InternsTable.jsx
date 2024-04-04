/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from 'react';
import DataTable from 'app/shared-components/data-table/DataTable';
import { ListItemIcon, MenuItem, Paper } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import { useGetUserDashboardInternsQuery } from '../../../UserDashboardApi';
//import OrdersStatus from '../order/OrdersStatus';

function InternsTable() {
	const { data: interns, isLoading } = useGetUserDashboardInternsQuery();
	//const [removeOrders] = useDeleteECommerceOrdersMutation();
	const columns = useMemo(
		() => [
			{
				accessorKey: 'id',
				header: 'Id',
				size: 64
			},
			{
				accessorKey: 'firstName',
				id: 'firstName',
				header: 'First Name'
			},
			{
				accessorKey: 'lastName',
				id: 'lastName',
				header: 'Last Name'
			},
			{
				accessorKey: 'Address',
				id: 'Address',
				header: 'Address',
				size: 64
			},
			{ 				accessorKey: 'email',
			id: 'email', header: 'Email', size: 128 },
			{

				id: 'gender',
				//accessorFn: (row) => <OrdersStatus name={row.status[0].name} />,
				accessorKey: 'gender',
				header: 'Gender'
			},
			{
				id: 'compétences',
				accessorKey: 'compétences',
				header: 'Compétences '
			},
			{
				id: 'faculte',
				accessorKey: 'faculte',
				header: 'Faculté'
			},
			{
				id: 'universite',
				accessorKey: 'universite',
				header: 'Université'
			},
			{
				id: 'niveauEtude',
				accessorKey: 'niveauEtude',
				header: 'Niveau Etude'
			}
		],
		[]
	);

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<Paper
			className="flex flex-col flex-auto shadow-3 rounded-t-16 overflow-hidden rounded-b-0 w-full h-full"
			elevation={0}
		>
			<DataTable
				initialState={{
					density: 'spacious',
					showColumnFilters: false,
					showGlobalFilter: true,
					columnPinning: {
						left: ['mrt-row-expand', 'mrt-row-select'],
						right: ['mrt-row-actions']
					},
					pagination: {
						pageIndex: 0,
						pageSize: 20
					}
				}}
				data={interns}
				columns={columns}
				renderRowActionMenuItems={({ closeMenu, row, table }) => [
					<MenuItem
						key={0}
						onClick={() => {
							//removeOrders([row.original.id]);
							closeMenu();
							table.resetRowSelection();
						}}
					>
						<ListItemIcon>
							<FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
						</ListItemIcon>
						Delete
					</MenuItem>
				]}
				renderTopToolbarCustomActions={({ table }) => {
					const { rowSelection } = table.getState();

					if (Object.keys(rowSelection).length === 0) {
						return null;
					}

					return (
						<Button
							variant="contained"
							size="small"
							onClick={() => {
								const selectedRows = table.getSelectedRowModel().rows;
								//removeOrders(selectedRows.map((row) => row.original.id));
								table.resetRowSelection();
							}}
							className="flex shrink min-w-40 ltr:mr-8 rtl:ml-8"
							color="secondary"
						>
							<FuseSvgIcon size={16}>heroicons-outline:trash</FuseSvgIcon>
							<span className="hidden sm:flex mx-8">Delete selected items</span>
						</Button>
					);
				}}
			/>
		</Paper>
	);
}

export default InternsTable;
