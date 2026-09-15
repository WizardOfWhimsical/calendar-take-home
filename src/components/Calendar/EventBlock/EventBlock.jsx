import styles from "./EventBlock.module.css";
// import { useState } from "react";
import image from "../../../assets/background-diagonal-line.svg";

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
export function EventBlock({ calendarId, title, style, ...props }) {
  return (
    <div
      {...props}
      // This where we will style it. we will build and object that does it
      style={style}
      className={`${styles.root}`}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.calendarName}>{calendarId}</div>
    </div>
  );
}
