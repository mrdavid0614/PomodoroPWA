import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

import { TimerButton } from './TimerButton';

type ComponentProps = {
	duration: number;
};

const Timer = ({ duration }: ComponentProps) => {
	const [durationLeft, setDurationLeft] = useState(duration);
	const [isRunning, setIsRunning] = useState(false);

	useInterval(() => {
		setDurationLeft(durationLeft - 1)
	}, 1000);

	const onTimerStart = () => {
		setIsRunning(true);
	};

	const onTimerPause = () => {
		setIsRunning(false);
	};

	const onTimerStop = () => {
		setIsRunning(false);
	};

	return (
		<div>
			<p>{ durationLeft }</p>
			<TimerButton
				buttonText="Start"
				onClick={onTimerStart}
			/>
			<TimerButton 
				buttonText="Pause"
				onClick={onTimerPause}
			/>
			<TimerButton
				buttonText="Stop"
				onClick={onTimerStop}
			/>
		</div>
	);
};

export { Timer };
