import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
	color: {
		text: "#1C1C1E",
		background: "#FCFCFD",
		highlight: "#7B7E84",
		formBackground: "#D6D6D6",
		buttonText: "#FCFCFD",
		buttonBackground: "#0A0909",
		buttonBackgroundHover: "#080808",
	}
};

const dark: DefaultTheme = {
	color: {
		text: "#FCFCFD",
		background: "#1C1C1E",
		highlight: "#565c5b",
		formBackground: "#161616",
		buttonText: "#FCFCFD",
		buttonBackground: "#0A0909",
		buttonBackgroundHover: "#080808",
	}
};

const themes = {
	light,
	dark
};

export default themes;
