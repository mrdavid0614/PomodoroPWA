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
		font-size: 16px;
	}

	h1 {
		font-size: 6rem;
		font-weight: 500;
	}

	h2 {
		font-size: 3rem;
		font-weight: 400;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 400;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
	}
`;

export { GlobalStyle };
