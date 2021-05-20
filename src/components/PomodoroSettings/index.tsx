import { Fragment } from "react";

import { BackButton } from "./styles";
import { ReactComponent as IconBackArrow } from "../../assets/icons/back-arrow.svg";

const PomodoroSettings = () => {
	return (
		<Fragment>
			<BackButton to="/">
				<IconBackArrow />
			</BackButton>
			<h1> Settings Page! </h1>
		</Fragment>
	)
}

export { PomodoroSettings };