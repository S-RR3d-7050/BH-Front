import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { darken, lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import { useDeleteECommerceUsersMutation } from '../ECommerceApi';
/**
 * The rows.
 */
const rows = [
	{
		id: 'id',
		align: 'left',
		disablePadding: false,
		label: 'ID',
		sort: true
	},
	{
		id: 'firstName',
		align: 'left',
		disablePadding: false,
		label: 'First Name',
		sort: true
	},
	{
		id: 'lastName',
		align: 'left',
		disablePadding: false,
		label: 'Last Name',
		sort: true
	},
	{
		id: 'Address',
		align: 'right',
		disablePadding: false,
		label: 'Address',
		sort: true
	},
	{
		id: 'email',
		align: 'left',
		disablePadding: false,
		label: 'Email',
		sort: true
	},
	{
		id: 'gender',
		align: 'left',
		disablePadding: false,
		label: 'Gender',
		sort: true
	},
	{
		id: 'compétences',
		align: 'left',
		disablePadding: false,
		label: 'Compétences',
		sort: true
	},
	{
		id: 'faculte',
		align: 'left',
		disablePadding: false,
		label: 'Faculté',
		sort: true
	},
	{
		id: 'universite',
		align: 'left',
		disablePadding: false,
		label: 'Université',
		sort: true
	},
	{
		id: 'niveauEtude',
		align: 'left',
		disablePadding: false,
		label: 'Niveau Etude',
		sort: true
	}

];

/**
 * The Users table head.
 */
function InternsTableHead(props) {
	const { selectedUserIds, onRequestSort, onSelectAllClick, tableUser, rowCount, onMenuItemClick } = props;
	const numSelected = selectedUserIds.length;
	const [selectedUsersMenu, setSelectedUsersMenu] = useState(null);
	//const [removeUsers] = useDeleteECommerceUsersMutation();
	const createSortHandler = (event, property) => {
		onRequestSort(event, property);
	};

	function openSelectedUsersMenu(event) {
		setSelectedUsersMenu(event.currentTarget);
	}

	function closeSelectedUsersMenu() {
		setSelectedUsersMenu(null);
	}

	// const {onSelectAllClick, User, UserBy, numSelected, rowCount} = props;
	return (
		<TableHead>
			<TableRow className="h-48 sm:h-64">
				<TableCell
					padding="none"
					className="w-40 md:w-64 text-center z-99"
					sx={{
						backgroundColor: (theme) =>
							darken(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.02 : 0.2)
					}}
				>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount !== 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
					/>
					{numSelected > 0 && (
						<Box
							className="flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 bUser-b-1"
							sx={{
								backgroundColor: (theme) =>
									theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
						>
							<IconButton
								aria-haspopup="true"
								onClick={openSelectedUsersMenu}
								size="large"
							>
								<FuseSvgIcon>heroicons-outline:dots-horizontal</FuseSvgIcon>
							</IconButton>
							<Menu
								id="selectedUsersMenu"
								anchorEl={selectedUsersMenu}
								open={Boolean(selectedUsersMenu)}
								onClose={closeSelectedUsersMenu}
							>
								<MenuList>
									<MenuItem
										onClick={() => {
											//removeUsers(selectedUserIds);
											onMenuItemClick();
											closeSelectedUsersMenu();
										}}
									>
										<ListItemIcon className="min-w-40">
											<FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
										</ListItemIcon>
										<ListItemText primary="Remove" />
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>
					)}
				</TableCell>
				{rows.map((row) => {
					return (
						<TableCell
							sx={{
								backgroundColor: (theme) =>
									theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02)
							}}
							className="p-4 md:p-16"
							key={row.id}
							align={row.align}
							padding={row.disablePadding ? 'none' : 'normal'}
							sortDirection={tableUser.id === row.id ? tableUser.direction : false}
						>
							{row.sort && (
								<Tooltip
									title="Sort"
									placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel
										active={tableUser.id === row.id}
										direction={tableUser.direction}
										onClick={(ev) => createSortHandler(ev, row.id)}
										className="font-semibold"
									>
										{row.label}
									</TableSortLabel>
								</Tooltip>
							)}
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
}

export default InternsTableHead;
