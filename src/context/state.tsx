import { createContext, useState, FC } from "react";
import { State } from "../types/state";

const defaultStateContext: State = {
	durations: {
		work: 1500,
		breakShort: 300,
		breakLong: 1800
	},
	theme: "light"
};

const StateContext = createContext<State>(defaultStateContext);

const StateContextProvider: FC = ({ children }) => {
	const [ durations, setDurations ] = useState<State["durations"]>(defaultStateContext.durations);
	const [ theme, setTheme ] = useState<State["theme"]>("light");

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
