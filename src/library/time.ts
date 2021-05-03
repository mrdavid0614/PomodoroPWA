const addLeadingZeroes = (time: number): string => (
	time < 10 ? `0${time}` : `${time}`
);

const composeTimeFromSeconds = (secondsLeft: number) => {
	const seconds = secondsLeft % 60;
	const minutes = Math.floor(secondsLeft / 60) % 60;

	return {
		seconds: addLeadingZeroes(seconds),
		minutes: addLeadingZeroes(minutes),
	};
};

export { composeTimeFromSeconds };
