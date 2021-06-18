import { Icon } from "../../Icon/index";
import * as Styled from "./styles";
import { ReactComponent as IconPause } from "../../../assets/icons/pause.svg";
import { ReactComponent as IconStop } from "../../../assets/icons/stop.svg";

type ComponentProps = {
	isPomodoroRunning: boolean;
    onTimerPause: () => void;
    onTimerStop: () => void;
};

const PomodoroControls = ({ isPomodoroRunning, onTimerPause, onTimerStop }: ComponentProps) => {
	return (
		<Styled.PomodoroControls>
			<Icon
				svg={ <IconPause /> }
				onClick={ () => onTimerPause() }
				isDisabled={ isPomodoroRunning ? false : true }
			/>

			<Icon
				svg={ <IconStop /> }
				onClick={ () => onTimerStop() }
				isDisabled={ isPomodoroRunning ? false : true }
			/>
		</Styled.PomodoroControls>
	);
};

export { PomodoroControls };