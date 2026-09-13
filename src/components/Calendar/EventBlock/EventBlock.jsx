import styles from './EventBlock.module.css';

/**
 * @typedef {Object} CalendarEvent
 * @property {string} calendarId
 * @property {string} id
 * @property {string} title
 */

/**
 * @typedef {CalendarEvent & React.HTMLAttributes<HTMLDivElement>} EventBlockProps
 */

/**
 * @param {EventBlockProps} props
 */
export function EventBlock({ calendarId, title, ...props }) {
	return (
		<div {...props} className={styles.root}>
			<div className={styles.title}>{title}</div>
			<div className={styles.calendarName}>{calendarId}</div>
		</div>
	);
}
