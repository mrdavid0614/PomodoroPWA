import styled from "styled-components";
import { BiPlayCircle, BiPauseCircle, BiStopCircle } from "react-icons/bi";

const PlayButton = styled(BiPlayCircle)`
    cursor: pointer;
`;

const PauseButton = styled(BiPauseCircle)`
    cursor: pointer;
`;

const StopButton = styled(BiStopCircle)`
    cursor: pointer;
`;

export { 
	PlayButton, 
	PauseButton, 
	StopButton
}