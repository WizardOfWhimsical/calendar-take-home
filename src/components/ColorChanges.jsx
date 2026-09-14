import { useState } from "react";
export function ChangeColor({ handleOnColorChange, customStyles }) {
  return (
    <fieldset>
      <legend>Selected Color: {customStyles.backgroundColor || "None"}</legend>
      <div>
        <input
          onChange={handleOnColorChange}
          checked={customStyles.backgroundColor === "blue"}
          type="radio"
          name="contact"
          value="var(--color-aqua-blue)"
          id="contactChoice1"
        />
        <label htmlFor="contactChoice1">Blue</label>

        <input
          onChange={handleOnColorChange}
          checked={customStyles.backgroundColor === "pink"}
          type="radio"
          name="contact"
          value="var(--color-buttercream-yellow)"
          id="contactChoice2"
        />
        <label htmlFor="contactChoice2">Pink</label>
      </div>
    </fieldset>
  );
}
