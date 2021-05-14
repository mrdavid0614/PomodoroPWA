import { Status } from "../../../types/status";

type ComponentProps = {
	currentStatus: Status["title"];
	pomodorosCompleted: number;
};

const PomodoroStatus = ({ currentStatus, pomodorosCompleted }: ComponentProps) => {
	return (
		<div>
			<h3>Current Status: { currentStatus }</h3>
			<h3>Pomodoros Completed: { pomodorosCompleted }</h3>
		</div>
	)
};

export { PomodoroStatus };
