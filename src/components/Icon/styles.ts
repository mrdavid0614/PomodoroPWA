import styled from "styled-components";

const Icon = styled.button`
	width: 2.75rem;
	height: 2.75rem;
	border: none;
	border-radius: 50%;
	background-color: white;
	cursor: pointer;

	svg {
		width: 100%;
		height: 100%;
		fill: ${ (props => props.theme.light.color.text) };
	}

	&[disabled] {
		cursor: not-allowed;

		svg {
			fill: ${ (props => props.theme.light.color.highlight) }
		}
	}
`;

export { Icon };
