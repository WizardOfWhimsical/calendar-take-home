import { useState } from "react";
import DiagonalLines from "../assets/background-diagonal-line.svg";
import Crosses from "../assets/background-plus.svg";
export function ChangeColor({ handleOnColorChange, customStyles }) {
  return (
    <fieldset>
      <legend>Selected Color: {customStyles.backgroundColor || "None"}</legend>
      <div>
        <input
          onChange={handleOnColorChange}
          checked={customStyles.backgroundColor === "var(--color-aqua-blue)"}
          type="radio"
          name="contact"
          value="var(--color-aqua-blue)"
          id="contactChoice1"
          data-img={Crosses}
        />
        <label htmlFor="contactChoice1">Blue</label>

        <input
          onChange={handleOnColorChange}
          checked={
            customStyles.backgroundColor === "var(--color-buttercream-yellow)"
          }
          type="radio"
          name="contact"
          value="var(--color-buttercream-yellow)"
          id="contactChoice2"
          data-img={DiagonalLines}
        />
        <label htmlFor="contactChoice2">Pink</label>
      </div>
    </fieldset>
  );
}
