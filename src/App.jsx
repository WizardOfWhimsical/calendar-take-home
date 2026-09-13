import layoutStyles from '#styles/Layout.module.css';

import { Calendar } from './components/Calendar';

export function App() {
	return (
		<div className={`${layoutStyles.center} ${layoutStyles.stack}`}>
			<Calendar />
		</div>
	);
}
