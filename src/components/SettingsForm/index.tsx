import { useState, FormEvent } from "react";
import useStateContext from "../../hooks/useStateContext";
import { State } from "../../types/state";
import { SettingsFormPomodoroDuration } from "./SettingsFormPomodoroDuration";
import * as Styled from "./styles";

const SettingsForm = () => {
	const { durations, theme, setDurations, setTheme } = useStateContext();
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
				<small>Measured in minutes</small>

				<SettingsFormPomodoroDuration
					id="workDuration"
					title="Work"
					value={ durationWork }
					onChange={ setDurationWork }
					valueMin={ 5 }
					valueMax={ 50 }
				/>

				<SettingsFormPomodoroDuration
					id="shortBreakDuration"
					title="Short Break"
					value={ durationBreakShort }
					onChange={ setDurationBreakShort }
					valueMin={ 1 }
					valueMax={ 30 }
				/>

				<SettingsFormPomodoroDuration
					id="longBreakDuration"
					title="Long Break"
					value={ durationBreakLong }
					onChange={ setDurationBreakLong }
					valueMin={ 3 }
					valueMax={ 50 }
				/>
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
