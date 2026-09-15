import layoutStyles from "#styles/Layout.module.css";
import { useState } from "react";
import { EventBlock } from "./EventBlock";
import { ChangeColor } from "../ColorChanges.jsx";
// import DiagonalLines from "../../assets/background-diagonal-line.svg";
// import Crosses from "../../assets/background-plus.svg";

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
    setCustomStyles({
      backgroundImage: event.target.dataset?.img,
      backgroundColor: event.target?.value,
    });
    console.log("Hitting color change");
  }

  // function handleOnPatternChange(event) {
  //   setCustomStyles((previous) => ({
  //     ...previous,
  //     backgroundImage: event.target.value,
  //     // backgroundImage: "unset",
  //     // display: "none",
  //   }));
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
          <ChangeColor
            handleOnColorChange={handleOnColorChange}
            customStyles={customStyles}
          />
          {/* <fieldset>
            <legend>
              Selected Background Image:
            </legend>
            <div>
              <input
                onChange={handleOnPatternChange}
                checked={
                  customStyles.backgroundImage === "var(--diagonal-background)"
                }
                type="radio"
                name="pattern"
                value="var(--diagonal-background)"
                id="contactChoice3"
              />
              <label htmlFor="contactChoice3">Lines</label>

              <input
                onChange={handleOnPatternChange}
                checked={customStyles.backgroundImage === `url("${Crosses}")`}
                type="radio"
                name="pattern"
                value={`url("${Crosses}")`}
                id="contactChoice4"
              />
              <label htmlFor="contactChoice4">Crosses</label>
            </div>
          </fieldset> */}
        </form>
      </div>
    </div>
  );
}
