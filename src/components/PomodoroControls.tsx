import { PlayButton, PauseButton, StopButton } from "../styles/pomodoroControls";

type ComponentProps = {
	onTimerStart: () => void;
	onTimerPause: () => void;
	onTimerStop: () => void;
};

const PomodoroControls = ({ onTimerStart, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<div>
			<PlayButton onClick={ ()=> onTimerStart() } size={ 90 } />
			<PauseButton onClick={ ()=> onTimerPause() } size={ 90 } />
			<StopButton onClick={ ()=> onTimerStop() } size={ 90 } />
		</div>
	);
};

export { PomodoroControls };
