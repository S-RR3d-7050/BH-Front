import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import FuseCountdown from '@fuse/core/FuseCountdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
/**
 * Form Validation Schema
 */
const schema = z.object({
	email: z.string().email('Vous devez saisir un email valide').nonempty('Vous devez saisir un email')
});
const defaultValues = {
	email: ''
};

/**
 * The classic coming soon page.
 */
function ComingSoonApp() {
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: zodResolver(schema)
	});
	const { isValid, dirtyFields, errors } = formState;

	function onSubmit() {
		reset(defaultValues);
	}

	return (
		<div className="flex min-w-0 flex-auto flex-col items-center sm:justify-center">
			<Paper className="min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
					<img
						className="w-48"
						src="assets/images/logo/logo.svg"
						alt="logo"
					/>

					<Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight">
						Presque là!
					</Typography>
					<Typography className="mt-2">
					Voulez-vous être averti lorsque nous serons prêts? Inscrivez-vous ci-dessous afin que nous puissions vous informer du
					lancement!
					</Typography>

					<div className="flex flex-col items-center py-48">
						<FuseCountdown endDate="2024-04-16" />
					</div>

					<form
						name="comingSoonForm"
						noValidate
						className="flex w-full flex-col justify-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Email address"
									type="email"
									error={!!errors.email}
									helperText={errors?.email?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Button
							variant="contained"
							color="secondary"
							className=" mt-4 w-full"
							aria-label="Register"
							disabled={_.isEmpty(dirtyFields) || !isValid}
							type="submit"
							size="large"
						>
							Prévenez-moi lorsque vous lancez
						</Button>

						<Typography
							className="mt-32 text-md font-medium"
							color="text.secondary"
						>
							Ceci n'est pas un abonnement à une newsletter. Nous vous enverrons un e-mail lors de notre lancement, puis nous serons supprimés de la liste.
						</Typography>
					</form>
				</div>
			</Paper>
		</div>
	);
}

export default ComingSoonApp;
