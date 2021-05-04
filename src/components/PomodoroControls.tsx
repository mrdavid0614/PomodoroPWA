type ComponentProps = {
	onTimerStart: () => void;
	onTimerPause: () => void;
	onTimerStop: () => void;
};

const PomodoroControls = ({ onTimerStart, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<div>
			<button type="button" onClick={ () => onTimerStart() }>Start</button>
			<button type="button" onClick={ () => onTimerPause() }>Pause</button>
			<button type="button" onClick={ () => onTimerStop() }>Stop</button>
		</div>
	);
};

export { PomodoroControls };
