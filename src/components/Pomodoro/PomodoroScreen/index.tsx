import { Helmet } from "react-helmet";

import { composeTimeFromSeconds } from "../../../library/time";

type ComponentProps = {
	secondsLeft: number;
};

const PomodoroScreen = ({ secondsLeft }: ComponentProps) => {
	const { minutes, seconds } = composeTimeFromSeconds(secondsLeft);
	const time = `${ minutes }:${ seconds }`;

	return (
		<>
			<Helmet>
				<title>{ time }</title>
			</Helmet>
			<h1>{ time }</h1>
		</>
		
	);
};

export { PomodoroScreen };
