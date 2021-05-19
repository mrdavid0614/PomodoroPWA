import * as Styled from "./styles";
import StartIcon from "../../../assets/icons/start.svg";
import PauseIcon from "../../../assets/icons/pause.svg";
import StopIcon from "../../../assets/icons/stop.svg";

type ComponentProps = {
	isPomodoroRunning: boolean;
    onTimerStart: () => void;
    onTimerPause: () => void;
    onTimerStop: () => void;
};

const PomodoroControls = ({ isPomodoroRunning, onTimerStart, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<Styled.PomodoroControls>
			<button 
				type="button" 
				onClick={ () => onTimerStart() } 
				disabled={ isPomodoroRunning? true : false }
			>
				<img src={ StartIcon } alt="Start Button"/>
			</button>

			<button 
				type="button" 
				onClick={ () => onTimerPause() } 
				disabled={ isPomodoroRunning? false : true }
			>
				<img src={ PauseIcon } alt="Pause button"/>
			</button>

			<button 
				type="button" 
				onClick={ () => onTimerStop() } 
				disabled={ isPomodoroRunning? false : true }
			>
				<img src={ StopIcon } alt="Stop button"/>
			</button>
		</Styled.PomodoroControls>
	);
};

export { PomodoroControls };