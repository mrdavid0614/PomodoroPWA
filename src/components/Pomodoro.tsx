import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { Status } from "../types/status";
import { pomodoroStatus } from "../library/pomodoroStatus";
import { pomodoroDurations } from "../library/pomodoroDurations";

import { PomodoroStatus } from "./PomodoroStatus";
import { PomodoroScreen } from "./PomodoroScreen";
import { PomodoroControls } from "./PomodoroControls";

const Pomodoro = () => {
	const [ pomodorosCompleted, setPomodorosCompleted ] = useState(0);
	const [ currentStatus, setCurrentStatus ] = useState<Status>(pomodoroStatus["work"]);
	const [ durationLeft, setDurationLeft ] = useState(pomodoroDurations["work"]);
	const [ isRunning, setIsRunning ] = useState(false);

	const fetchNextStatus = (): Status["id"] => {
		if (currentStatus.id === "work") {
			const hasCompletedFourPomodoros = (pomodorosCompleted > 0 && pomodorosCompleted % 4 === 0);
			return hasCompletedFourPomodoros ? "long_break" : "short_break";
		}

		return "work";
	};

	useInterval(() => {
		if (durationLeft === 0) {
			if (currentStatus.id === "work") {
				setPomodorosCompleted(pomodorosCompleted + 1);
			}

			const nextStatusId = fetchNextStatus();
			setCurrentStatus(pomodoroStatus[nextStatusId]);
			setDurationLeft(pomodoroDurations[nextStatusId]);
			setIsRunning(true);
			return;
		}

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
		setPomodorosCompleted(0);
		setCurrentStatus(pomodoroStatus["work"]);
		setDurationLeft(pomodoroDurations["work"]);
	};

	return (
		<div>
			<PomodoroStatus
				currentStatus={ currentStatus.title }
				pomodorosCompleted={ pomodorosCompleted }
			/>

			<PomodoroScreen secondsLeft={ durationLeft } />

			<PomodoroControls
				onTimerStart={ onTimerStart }
				onTimerPause={ onTimerPause }
				onTimerStop={ onTimerStop }
			/>
		</div>
	);
};

export { Pomodoro };
