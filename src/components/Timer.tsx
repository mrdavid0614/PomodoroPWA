import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { Status } from "../types/status";
import { pomodoroStatus } from "../library/pomodoroStatus";
import { pomodoroDurations } from "../library/pomodoroDurations";

import { TimerButton } from './TimerButton';

const Timer = () => {
	const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
	const [currentStatus, setCurrentStatus] = useState<Status>(pomodoroStatus[1]);
	const [durationLeft, setDurationLeft] = useState(pomodoroDurations[1]);
	const [isRunning, setIsRunning] = useState(false);

	const fetchNextStatus = (): Status["id"] => {
		if (currentStatus.id === 1) {
			const hasCompletedFourPomodoros = (pomodorosCompleted > 0 && pomodorosCompleted % 4 === 0);
			return hasCompletedFourPomodoros ? 3 : 2;
		};

		return 1;
	};

	useInterval(() => {
		if (durationLeft === 0) {
			if (currentStatus.id === 1) {
				setPomodorosCompleted(pomodorosCompleted + 1);
			};

			setCurrentStatus(pomodoroStatus[fetchNextStatus()]);
			setDurationLeft(pomodoroDurations[currentStatus.id]);
			setIsRunning(true);
			return;
		};

		setDurationLeft(durationLeft - 1);
	}, isRunning ? 1000 : null);

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
