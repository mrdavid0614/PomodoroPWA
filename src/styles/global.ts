import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: "Nunito Sans", sans-serif;
		font-size: 16px;
		color: ${ (props) => props.theme.light.color.text };
		background-color: ${ (props) => props.theme.light.color.background }
	}

	h1 {
		font-size: calc(6rem + 1vw);
		font-weight: 800;
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
