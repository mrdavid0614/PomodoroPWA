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

	const minutesToSeconds = (minutes: number) => {
		const minuteInSeconds = 60;
		return minutes * minuteInSeconds;
	}
	const secondsToMinutes = (seconds: number) => {
		const secondInMinutes = 60;
		return seconds / secondInMinutes;
	}
	return (
		<Styled.Form onSubmit={ (event) => onSubmit(event) }>
			<fieldset>
				<legend>Pomodoro durations</legend>
				<small>Measured in minutes</small>
				<Styled.FormControl>
					<label htmlFor="workDuration">Work (min)</label>
					<input
						type="number"
						min="5"
						max="50"
						id="workDuration"
						value={ secondsToMinutes(durationWork) }
						onChange={ ({ target }) => setDurationWork(minutesToSeconds(target.valueAsNumber)) }
					/>
				</Styled.FormControl>

				<Styled.FormControl>
					<label htmlFor="shortBreakDuration">Short Break (min)</label>
					<input
						type="number"
						min="5"
						max="50"
						id="shortBreakDuration"
						value={ secondsToMinutes(durationBreakShort) }
						onChange={ ({ target }) => setDurationBreakShort(minutesToSeconds(target.valueAsNumber)) }
					/>
				</Styled.FormControl>

				<Styled.FormControl>
					<label htmlFor="longBreakDuration">Long Break (min)</label>
					<input
						type="number"
						min="5"
						max="50"
						id="longBreakDuration"
						value={ secondsToMinutes(durationBreakLong) }
						onChange={ ({ target }) => setDurationBreakLong(minutesToSeconds(target.valueAsNumber)) }
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
