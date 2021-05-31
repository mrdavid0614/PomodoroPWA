import { useContext, useState, FormEvent } from "react";
import { StateContext } from "../../context/state";
import { State } from "../../types/state";
import * as Styled from "./styles";

const SettingsForm = () => {
	const { durations, theme, setDurations, setTheme } = useContext(StateContext);
	const [ durationWork, setDurationWork ] = useState(durations.work);
	const [ durationBreakShort, setDurationBreakShort ] = useState(durations.breakShort);
	const [ durationBreakLong, setDurationBreakLong ] = useState(durations.breakLong);
	const [ newTheme, setNewTheme ] = useState(theme);

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		setDurations({
			work: durationWork,
			breakShort: durationBreakShort,
			breakLong: durationBreakLong
		});

		setTheme(newTheme);
	};

	return (
		<Styled.Form onSubmit={ (event) => onSubmit(event) }>
			<fieldset>
				<legend>Pomodoro durations</legend>

				<Styled.FormControl>
					<label htmlFor="workDuration">Work</label>
					<input
						type="number"
						min="5"
						max="50"
						id="workDuration"
						value={ durationWork }
						onChange={ ({ target }) => setDurationWork(target.valueAsNumber) }
					/>
				</Styled.FormControl>

				<Styled.FormControl>
					<label htmlFor="shortBreakDuration">Short Break</label>
					<input
						type="number"
						min="5"
						max="50"
						id="shortBreakDuration"
						value={ durationBreakShort }
						onChange={ ({ target }) => setDurationBreakShort(target.valueAsNumber) }
					/>
				</Styled.FormControl>

				<Styled.FormControl>
					<label htmlFor="longBreakDuration">Long Break</label>
					<input
						type="number"
						min="5"
						max="50"
						id="longBreakDuration"
						value={ durationBreakLong }
						onChange={ ({ target }) => setDurationBreakLong(target.valueAsNumber) }
					/>
				</Styled.FormControl>
			</fieldset>

			<Styled.FormControl>
				<label htmlFor="theme">Theme</label>
				<select id="theme" value={ newTheme } onChange={ ({ target }) => setNewTheme((target.value as State["theme"])) }>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</Styled.FormControl>

			<button type="submit">Save settings</button>
		</Styled.Form>
	)
};

export { SettingsForm };
