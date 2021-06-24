import styled from "styled-components";

const Icon = styled.button`
	width: 2.75rem;
	height: 2.75rem;
	border: none;
	border-radius: 50%;
	background-color: ${ ({ theme }) => theme.color.background };
	cursor: pointer;

	svg {
		width: 100%;
		height: 100%;
		fill: ${ (({ theme }) => theme.color.text) };
	}

	&[disabled] {
		cursor: not-allowed;

		svg {
			fill: ${ (({ theme }) => theme.color.highlight) }
		}
	}
`;

export { Icon };
