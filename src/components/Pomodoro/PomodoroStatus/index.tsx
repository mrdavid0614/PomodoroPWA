import { Status } from "../../../types/status";
import * as Styled from "./styles";

type ComponentProps = {
	currentStatus: Status["title"];
	pomodorosCompleted: number;
};

const PomodoroStatus = ({ currentStatus, pomodorosCompleted }: ComponentProps) => {
	return (
		<Styled.PomodoroStatus>
			<h3>{ currentStatus }</h3>
			<p role="separator">|</p>
			<h3>{ `#${ pomodorosCompleted }` }</h3>
		</Styled.PomodoroStatus>
	)
};

export { PomodoroStatus };
