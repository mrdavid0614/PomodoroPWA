import * as Styled from "./styles";

const SettingsForm = () => {
	return (
		<Styled.Form>
			<fieldset>
				<Styled.Label>Pomodoro durations:</Styled.Label>
				<div>
					<label for="workDuration">Work:</label>
					<input type="number" min="5" max="50" id="workDuration" />
				</div>
				<div>
					<label for="shortBreakDuration">Short Break:</label>
					<input type="number" min="5" max="50" id="shortBreakDuration" />
				</div>
				<div>
					<label for="longBreakDuration">Long Break:</label>
					<input type="number" min="5" max="50" id="longBreakDuration" />
				</div>
				<Styled.Label htmlFor="theme">Theme: </Styled.Label>
				<select id="theme">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				<Styled.Button>Save settings</Styled.Button>
			</fieldset>
		</Styled.Form>
	)
};

export { SettingsForm };
