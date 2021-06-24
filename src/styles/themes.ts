import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
	color: {
		text: "#1C1C1E",
		background: "#FCFCFD",
		highlight: "#7B7E84",
	}
};

const dark: DefaultTheme = {
	color: {
		text: "#FCFCFD",
		background: "#1C1C1E",
		highlight: "#565c5b",
	}
};

const themes = {
	light,
	dark
};

export default themes;
