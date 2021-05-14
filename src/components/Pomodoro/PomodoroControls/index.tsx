import * as Styled from "./styles";
import StartIcon from "../../../assets/icons/start.svg";
import PauseIcon from "../../../assets/icons/pause.svg";
import StopIcon from "../../../assets/icons/stop.svg";

type ComponentProps = {
    onTimerStart: () => void;
    onTimerPause: () => void;
    onTimerStop: () => void;
};

const PomodoroControls = ({ onTimerStart, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<div>
			<Styled.Control type="button" onClick={ () => onTimerStart() }>
				<img src={ StartIcon } alt="Start Button"/>
			</Styled.Control>
			<Styled.Control type="button" onClick={ () => onTimerPause() }>
				<img src={ PauseIcon } alt="Pause button"/>
			</Styled.Control>
			<Styled.Control type="button" onClick={ () => onTimerStop() }>
				<img src={ StopIcon } alt="Stop button"/>
			</Styled.Control>
		</div>
	);
};

export { PomodoroControls };