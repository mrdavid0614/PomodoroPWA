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

	const handleClickOnStartButton = () => {
		console.log('Start Button')
	};

	const handleClickOnPauseButton = () => {
		console.log('Pause Button')
	};

	const handleClickOnStopButton = () => {
		console.log('Stop Button');
	};

	return (
		<div>
			<p>{ durationLeft }</p>
			<TimerButton
				action="Start"
				onClick={handleClickOnStartButton}
			/>
			<TimerButton 
				action="Pause"
				onClick={handleClickOnPauseButton}
			/>
			<TimerButton
				action="Stop"
				onClick={handleClickOnStopButton}
			/>
		</div>
	);
};

export { Timer };
