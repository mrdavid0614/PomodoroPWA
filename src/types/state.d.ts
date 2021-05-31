/* eslint-disable no-unused-vars */
import { Durations } from "./durations";

interface State {
	durations: Durations,
	theme: "light" | "dark";
	setDurations: (durations: Durations) => void;
	setTheme: (theme: State["theme"]) => void;
}

export { State };
