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
		<div>
			<Styled.Control 
				type="button" 
				onClick={ () => onTimerStart() } 
				disabled={ isPomodoroRunning? true : false }
			>
				<img src={ StartIcon } alt="Start Button"/>
			</Styled.Control>

			<Styled.Control 
				type="button" 
				onClick={ () => onTimerPause() } 
				disabled={ isPomodoroRunning? false : true }
			>
				<img src={ PauseIcon } alt="Pause button"/>
			</Styled.Control>

			<Styled.Control 
				type="button" 
				onClick={ () => onTimerStop() } 
				disabled={ isPomodoroRunning? false : true }
			>
				<img src={ StopIcon } alt="Stop button"/>
			</Styled.Control>
		</div>
	);
};

export { PomodoroControls };