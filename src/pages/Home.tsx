import { Pomodoro } from "../components/Pomodoro";
import { SettingsButton } from "./styles";
import { ReactComponent as IconSettings } from "../assets/icons/settings.svg";
const Home = () => (
	<>
		<SettingsButton to="/settings">
			<IconSettings />
		</SettingsButton>
		<Pomodoro />
	</>
);

export { Home };