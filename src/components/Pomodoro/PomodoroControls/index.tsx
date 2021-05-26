import { Icon } from "../../Icon/index";
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
			<Icon
				svg={ <IconStart /> }
				onClick={ () => onTimerStart() }
				isDisabled={ isPomodoroRunning ? true : false }
			/>

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