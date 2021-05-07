import { DefaultTheme } from "styled-components";

const light = {
	color: {
		text: "#1C1C1E",
		background: "#FCFCFD",
		highlight: "#7B7E84",
	}
};

const dark = {
	color: {
		text: "#FCFCFD",
		background: "#1C1C1E",
		highlight: "#3C3E43",
	}
};

const theme: DefaultTheme = {
	light,
	dark
};

export { theme };
