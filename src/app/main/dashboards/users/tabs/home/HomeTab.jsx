import { motion } from 'framer-motion';
import TotalWidget from './widgets/TotalWidget';
import AdminsWidget from './widgets/AdminsWidget';
import FormerWidget from './widgets/FormerWidget';
import StudentsWidget from './widgets/StudentsWidget';
import UsersWidget from './widgets/UsersWidget';
//import TaskDistributionWidget from './widgets/TaskDistributionWidget';
//import ScheduleWidget from './widgets/ScheduleWidget';

/**
 * The HomeTab component.
 */
function HomeTab() {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.04
			}
		}
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};
	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<motion.div variants={item}>
				<TotalWidget />
			</motion.div>
			<motion.div variants={item}>
				<AdminsWidget />
			</motion.div>
			<motion.div variants={item}>
				<FormerWidget />
			</motion.div>
			<motion.div variants={item}>
				<StudentsWidget />
			</motion.div>
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4"
			>
				<UsersWidget />
			</motion.div>

		</motion.div>
	);
}

export default HomeTab;
