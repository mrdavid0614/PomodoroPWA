import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

type ComponentProps = {
	duration: number;
};

const Timer = ({ duration }: ComponentProps) => {
	const [durationLeft, setDurationLeft] = useState(duration);

	useInterval(() => {
		setDurationLeft(durationLeft - 1)
	}, 1000);

	return (
		<div>
			<p>{ durationLeft }</p>
		</div>
	);
};

export { Timer };
