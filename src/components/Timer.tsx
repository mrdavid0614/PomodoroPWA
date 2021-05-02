import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

import { TimerButton } from './TimerButton';

type ComponentProps = {
	duration: number;
};

const Timer = ({ duration }: ComponentProps) => {
	const [durationLeft, setDurationLeft] = useState(duration);

	useInterval(() => {
		setDurationLeft(durationLeft - 1)
	}, 1000);

	return (
		<div>
			<p>{ durationLeft }</p>
			<TimerButton
				action="Start"
			/>
			<TimerButton 
				action="Pause"
			/>
			<TimerButton
				action="Stop"
			/>
		</div>
	);
};

export { Timer };
