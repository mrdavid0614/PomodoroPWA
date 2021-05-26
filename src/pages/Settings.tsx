import { BackButton } from "./styles";
import { ReactComponent as IconBackArrow } from "../assets/icons/back-arrow.svg";
import { SettingsForm } from "../components/SettingsForm";

const Settings = () => {
	return (
		<>
			<BackButton to="/">
				<IconBackArrow />
			</BackButton>
			<h2>Settings</h2>
			<SettingsForm />
		</>
	)
}

export { Settings };