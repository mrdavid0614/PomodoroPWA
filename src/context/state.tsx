import { createContext, useState, FC } from "react";
import { useMediaPredicate } from "react-media-hook";
import { State } from "../types/state";

const defaultStateContext: State = {
	durations: {
		work: 1500,
		breakShort: 300,
		breakLong: 1800
	},
	theme: "light",
	setDurations: () => {},
	setTheme: () => {},
};

const StateContext = createContext<State>(defaultStateContext);

// eslint-disable-next-line react/prop-types
const StateContextProvider: FC = ({ children }) => {
	const preferredTheme = useMediaPredicate("(prefers-color-scheme: light)") ? "light" : "dark";

	const [ durations, setDurations ] = useState<State["durations"]>(defaultStateContext.durations);
	const [ theme, setTheme ] = useState<State["theme"]>(preferredTheme);

	const values = {
		durations,
		setDurations,
		theme,
		setTheme
	};

	return (
		<StateContext.Provider value={ values }>
			{ children }
		</StateContext.Provider>
	)
};

export { StateContext, StateContextProvider };
