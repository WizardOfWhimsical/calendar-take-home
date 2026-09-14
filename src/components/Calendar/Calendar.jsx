import layoutStyles from "#styles/Layout.module.css";
import { useState } from "react";
import { EventBlock } from "./EventBlock";

/** @import { CalendarEvent } from './EventBlock/EventBlock.jsx' */

export function Calendar() {
  // const [blue, setBlue] = useState("blue");
  // const [color, setColor] = useState("blue");
  const [customStyles, setCustomStyles] = useState({
    backgroundColor: "",
    backgroundImage: "",
  });

  /** @type {CalendarEvent[]} */
  const events = [
    {
      calendarId: "work",
      id: "event-1",
      title: "Team standup",
    },
    {
      calendarId: "personal",
      id: "event-2",
      title: "Lunch with friend",
    },
  ];
  function handleOnColorChange(event) {
    setCustomStyles((previous) => ({
      ...previous,
      backgroundColor: event.target?.value,
    }));
    console.log("Hitting color change");
  }
  // function handleOnPatternChange() {
  //   console.log("This is pattern change");
  // }

  /**
   * 1) implement color coding for the different calendars allow users to
   * 2) choose which color corresponds to each calendar
   * 3) render a background pattern with each color
   * instructional note: so users can distinguish calendars without the
   * use of color
   * target the actualy element id to assign the classes for images
   */

  return (
    <div>
      <div
        className={`${layoutStyles.center} ${layoutStyles.intrinsic} ${layoutStyles.stack}`}
      >
        {events.map((event) => (
          <EventBlock key={event.id} style={customStyles} {...event} />
        ))}
      </div>

      <div>
        <form>
          <fieldset>
            <legend>
              Selected Color: {customStyles.backgroundColor || "None"}
            </legend>
            <div>
              <input
                onChange={handleOnColorChange}
                checked={customStyles.backgroundColor === "blue"}
                type="radio"
                name="contact"
                value="blue"
                id="contactChoice1"
              />
              <label htmlFor="contactChoice1">Blue</label>

              <input
                onChange={handleOnColorChange}
                checked={customStyles.backgroundColor === "pink"}
                type="radio"
                name="contact"
                value="pink"
                id="contactChoice2"
              />
              <label htmlFor="contactChoice2">Pink</label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
