import * as Styled from "./styles";

const SettingsForm = () => {
	return (
		<Styled.Form>
			<fieldset>
				<Styled.Legend>Pomodoro durations:</Styled.Legend>
				<div>
					<label htmlFor="workDuration">Work:</label>
					<input type="number" min="5" max="50" id="workDuration" />
				</div>
				<div>
					<label htmlFor="shortBreakDuration">Short Break:</label>
					<input type="number" min="5" max="50" id="shortBreakDuration" />
				</div>
				<div>
					<label htmlFor="longBreakDuration">Long Break:</label>
					<input type="number" min="5" max="50" id="longBreakDuration" />
				</div>
				<label htmlFor="theme">Theme: </label>
				<select id="theme">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				<p>
					<Styled.Button>Save settings</Styled.Button>
				</p>
			</fieldset>
		</Styled.Form>
	)
};

export { SettingsForm };
