import * as Styled from "./styles";

const SettingsForm = () => {
	return (
		<Styled.Form>
			<fieldset>
				<Styled.Label>Pomodoro durations:</Styled.Label>
				<p>Work: <input type="number" min="5" max="50" /></p>
				<p>Short Break: <input type="number" min="5" max="50" /></p>
				<p>Long Break: <input type="number" min="5" max="50" /></p>
				<Styled.Label htmlFor="theme">Theme: </Styled.Label>
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