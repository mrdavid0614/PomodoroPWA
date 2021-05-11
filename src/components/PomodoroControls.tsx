import StartIcon from "../assets/start.svg";
import PauseIcon from "../assets/pause.svg";
import StopIcon from "../assets/stop.svg";
import "../styles/pomodoroControl.css";

type ComponentProps = {
	onTimerStart: () => void;
	onTimerPause: () => void;
	onTimerStop: () => void;
};

const PomodoroControls = ({ onTimerStart, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<div>
			<button type="button" onClick={ () => onTimerStart() }>
				<img src={ StartIcon } alt="Start Button"/>
			</button>
			<button type="button" onClick={ () => onTimerPause() }>
				<img src={ PauseIcon } alt="Pause button"/>
			</button>
			<button type="button" onClick={ () => onTimerStop() }>
				<img src={ StopIcon } alt="Stop button"/>
			</button>
		</div>
	);
};

export { PomodoroControls };
