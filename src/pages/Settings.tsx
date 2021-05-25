import { BackButton, SettingsForm } from "./styles";
import { ReactComponent as IconBackArrow } from "../assets/icons/back-arrow.svg";

const Settings = () => {
	return (
		<>
			<BackButton to="/">
				<IconBackArrow />
			</BackButton>
			<h2>Settings</h2>
			<SettingsForm>
				<p>
					<div>
						<label htmlFor="status-list">Pomodoro durations:</label>
					</div>
					<div>
						<select id="status-list">
							<option value="Work">Work</option>
							<option value="Short Break">Short Break</option>
							<option value="Long Break">Long Break</option>
						</select>
					</div>
				</p>
				<p>
					<div>
						<label htmlFor="theme">Theme:</label>
					</div>
					<div>
						<select id="theme">
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</div>
				</p>
				<input type="submit" value="Save settings" />
			</SettingsForm>
		</>
	)
}

export { Settings };