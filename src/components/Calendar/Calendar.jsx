import layoutStyles from '#styles/Layout.module.css';

import { EventBlock } from './EventBlock';

/** @import { CalendarEvent } from './EventBlock/EventBlock.jsx' */

export function Calendar() {
	/** @type {CalendarEvent[]} */
	const events = [
		{
			calendarId: 'work',
			id: 'event-1',
			title: 'Team standup',
		},
		{
			calendarId: 'personal',
			id: 'event-2',
			title: 'Lunch with friend',
		},
	];

	return (
		<div
			className={`${layoutStyles.center} ${layoutStyles.intrinsic} ${layoutStyles.stack}`}>
			{events.map((event) => (
				<EventBlock key={event.id} {...event} />
			))}
		</div>
	);
}
