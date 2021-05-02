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

	const onTimerStart = () => {
		console.log('Timer started');
	};

	const onTimerPause = () => {
		console.log('Timer paused');
	};

	const onTimerStop = () => {
		console.log('Timer stopped');
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
