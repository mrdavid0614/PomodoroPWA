import { useState, useEffect } from "react";
import { useInterval } from "../../hooks/useInterval";
import useStateContext from "../../hooks/useStateContext";
import { Status } from "../../types/status";
import { pomodoroStatus } from "../../library/pomodoroStatus";
import { PomodoroStatus } from "./PomodoroStatus/index";
import { PomodoroScreen } from "./PomodoroScreen/index";
import { PomodoroControls } from "./PomodoroControls/index";

const Pomodoro = () => {
	const { durations } = useStateContext();
	const [ pomodorosCompleted, setPomodorosCompleted ] = useState(0);
	const [ currentStatus, setCurrentStatus ] = useState<Status>(pomodoroStatus["work"]);
	const [ durationLeft, setDurationLeft ] = useState(0);
	const [ isRunning, setIsRunning ] = useState(false);

	useEffect(() => {
		setCurrentStatus(pomodoroStatus["work"]);
		setDurationLeft(durations["work"]);
	}, []);

	const fetchNextStatus = (): Status["id"] => {
		if (currentStatus.id === "work") {
			const hasCompletedFourPomodoros = (pomodorosCompleted > 0 && pomodorosCompleted % 4 === 0);
			return hasCompletedFourPomodoros ? "breakLong" : "breakShort";
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
			setDurationLeft(durations[nextStatusId]);
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
		setDurationLeft(durations["work"]);
	};

	return (
		<div>
			<PomodoroStatus
				currentStatus={ currentStatus.title }
				pomodorosCompleted={ pomodorosCompleted }
			/>

			<PomodoroScreen secondsLeft={ durationLeft } onTimerStart={ onTimerStart }/>

			<PomodoroControls
				onTimerPause={ onTimerPause }
				onTimerStop={ onTimerStop }
				isPomodoroRunning={ isRunning }
			/>
		</div>
	);
};

export { Pomodoro };