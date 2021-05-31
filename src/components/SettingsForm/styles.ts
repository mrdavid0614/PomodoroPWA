import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;

	fieldset {
		border: 0;
	
		legend {
			font-weight: bold;
		}
	}

	button {
		margin-top: 0.75rem;
		justify-self: center;
		align-self: center;
	}
`;

const FormControl = styled.div`
	display: flex;
	flex-direction: column;
`;

export { Form, FormControl };