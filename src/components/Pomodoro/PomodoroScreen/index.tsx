import { Helmet } from "react-helmet";

import { composeTimeFromSeconds } from "../../../library/time";
import { Timer } from "./styles";
type ComponentProps = {
	secondsLeft: number;
	onTimerStart: () => void;
};

const PomodoroScreen = ({ secondsLeft, onTimerStart }: ComponentProps) => {
	const { minutes, seconds } = composeTimeFromSeconds(secondsLeft);
	const time = `${ minutes }:${ seconds }`;

	return (
		<>
			<Helmet>
				<title>{ time }</title>
			</Helmet>
			<Timer onClick={ () => onTimerStart() }>{ time }</Timer>
		</>
		
	);
};

export { PomodoroScreen };
