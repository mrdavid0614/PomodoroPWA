import { BackButton } from "./styles";
import { ReactComponent as IconBackArrow } from "../assets/icons/back-arrow.svg";

const Settings = () => {
	return (
		<>
			<BackButton to="/">
				<IconBackArrow />
			</BackButton>
			<h1> Settings Page! </h1>
		</>
	)
}

export { Settings };