# Calendar color-coding assignment

This project is a take-home assessment designed to evaluate your ability to manage user-controlled state in React.

## Developer setup

1. Clone this repository to your local machine.
2. Navigate to the cloned directory.
3. Install the dependencies using `npm ci`.
4. Start the development server using `npm run dev`.
5. Open your web browser to `http://localhost:5173`.

You'll see a screen with two blocks that look like this:

![Calendar blocks](./public/start.png)

## Scenario

You're working on a new feature for a calendar application that renders events from multiple caldar sources. While each calendar source (which we'll call a "calendar" for simplicity) provides a text label, you want to enhance the UX a little bit with some **color coding**. This is your assignment:

- implement **color coding** for the different calendars
- allow users to choose _which_ color corresponds to each calendar
- render a background pattern with each color, so users can distinguish calendars without the use of color

## About the boilerplate

You have an `<App />` component that serves as the entry point for the application. `<App />` renders a `<Calendar />` component, which in turn renders individual events from multiple calendar sources. For the sake of simplicity, there are only 2 events: 1 event each for a "work" and "personal" calendar.

At the very top of `src/index.css`, you'll find two CSS custom properties. These are the colors your UI must offer to the user.

In the `src/assets/` directory, you'll find two SVG files with the word "background" in their names. These are the background patterns you'll use to distinguish the different colors.

**Hint:** You may find yourself working in either `<App />` or `<Calendar />`. You are allowed to edit any file you wish, but don't overthink it!

## Acceptance criteria

- [ ] A new addition to the calendar UI allows users to select colors for each calendar
- [ ] Users may select _either_ available color for _either_ calendar
- [ ] Users are presented with the _option_ to enable or disable the background patterns associated with for each color
- [ ] When background patterns are enabled and a calendar is set to the **blue** color, it displays the "plus" background pattern
- [ ] When background patterns are enabled and a calendar is set to the **yellow** color, it displays the "diagonal line" background pattern
- [ ] Controls in the UI are clearly labeled
- [ ] Controls in the UI may be used with either a mouse or keyboard

## Example end states

| Color-coded calendars (no background pattern enaled)                  | Color-coded calendars (with background pattern enabled)              |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Color coded calenar, no pattern](./public/end_color_no_pattern.png) | ![Color coded calendar with pattern](./public/end_color_pattern.png) |
