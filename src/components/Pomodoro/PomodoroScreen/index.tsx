import { composeTimeFromSeconds } from "../../../library/time";

type ComponentProps = {
	secondsLeft: number;
};

const PomodoroScreen = ({ secondsLeft }: ComponentProps) => {
	const { minutes, seconds } = composeTimeFromSeconds(secondsLeft);

	return (
		<h1>{ minutes }:{ seconds }</h1>
	);
};

export { PomodoroScreen };
