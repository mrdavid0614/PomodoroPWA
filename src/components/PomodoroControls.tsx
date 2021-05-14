import StartIcon from "../assets/icons/start.svg";
import PauseIcon from "../assets/icons/pause.svg";
import StopIcon from "../assets/icons/stop.svg";
import { Button, Icon } from "../styles/pomodoroControls";

type ComponentProps = {
    onTimerStart: () => void;
    onTimerPause: () => void;
    onTimerStop: () => void;
};

const PomodoroControls = ({ onTimerStart, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<div>
			<Button type="button" onClick={ () => onTimerStart() }>
				<Icon src={ StartIcon } alt="Start Button"/>
			</Button>
			<Button type="button" onClick={ () => onTimerPause() }>
				<Icon src={ PauseIcon } alt="Pause button"/>
			</Button>
			<Button type="button" onClick={ () => onTimerStop() }>
				<Icon src={ StopIcon } alt="Stop button"/>
			</Button>
		</div>
	);
};

export { PomodoroControls };