/* eslint-disable no-unused-vars */
import { minutesToSeconds, secondsToMinutes  } from "../../library/time";
import * as Styled from "./styles";

type ComponentProps = {
	id: string;
	title: string;
	value: number;
	onChange: (value: number) => void; 
	valueMin: number;
	valueMax: number;
};

const SettingsFormPomodoroDuration = ({ id, title, value, onChange, valueMin, valueMax }: ComponentProps) => {
	return (
		<Styled.FormControl>
			<label htmlFor={ id }>{ title }</label>
			<input
				type="number"
				name={ id }
				value={ secondsToMinutes(value) }
				min={ valueMin }
				max={ valueMax }
				onChange={ ({ target }) => onChange(minutesToSeconds(target.valueAsNumber)) }
			/>
		</Styled.FormControl>
	)
};

export { SettingsFormPomodoroDuration };
