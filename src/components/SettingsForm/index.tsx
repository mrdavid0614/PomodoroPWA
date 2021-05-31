import * as Styled from "./styles";

const SettingsForm = () => {
	return (
		<Styled.Form>
			<fieldset>
				<legend>Pomodoro durations</legend>

				<Styled.FormControl>
					<label htmlFor="workDuration">Work</label>
					<input type="number" min="5" max="50" id="workDuration" />
				</Styled.FormControl>

				<Styled.FormControl>
					<label htmlFor="shortBreakDuration">Short Break</label>
					<input type="number" min="5" max="50" id="shortBreakDuration" />
				</Styled.FormControl>

				<Styled.FormControl>
					<label htmlFor="longBreakDuration">Long Break</label>
					<input type="number" min="5" max="50" id="longBreakDuration" />
				</Styled.FormControl>
			</fieldset>

			<Styled.FormControl>
				<label htmlFor="theme">Theme</label>
				<select id="theme">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</Styled.FormControl>

			<button type="submit">Save settings</button>
		</Styled.Form>
	)
};

export { SettingsForm };
