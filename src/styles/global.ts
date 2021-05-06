import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: "Fira Code", monospace;
	}
`;

export { GlobalStyle };
