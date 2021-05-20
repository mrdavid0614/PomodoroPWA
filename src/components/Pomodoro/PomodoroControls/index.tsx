import * as Styled from "./styles";
import { ReactComponent as IconStart } from "../../../assets/icons/start.svg";
import { ReactComponent as IconPause } from "../../../assets/icons/pause.svg";
import { ReactComponent as IconStop } from "../../../assets/icons/stop.svg";

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
				<IconStart />
			</button>

			<button 
				type="button" 
				onClick={ () => onTimerPause() } 
				disabled={ isPomodoroRunning? false : true }
			>
				<IconPause />
			</button>

			<button 
				type="button" 
				onClick={ () => onTimerStop() } 
				disabled={ isPomodoroRunning? false : true }
			>
				<IconStop />
			</button>
		</Styled.PomodoroControls>
	);
};

export { PomodoroControls };