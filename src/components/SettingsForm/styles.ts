import styled from "styled-components";

export const FormButton = styled.button`
	padding: 15px;
	margin-top: 1rem;
	justify-self: center;
	align-self: center;
	color: ${ ({ theme }) => theme.color.buttonText };
	border: none;
	border-radius: 15px;
	font-size: 20px;
	background-color: ${ ({ theme }) => theme.color.buttonBackground };
	cursor: pointer;
	
	&:hover {
		background-color: ${ ({ theme }) => theme.color.buttonBackgroundHover };
		font-size: 20.5px;
	}
	`;
	
export const Form = styled.form`
	padding: 50px 70px 35px 70px;
	background-color: ${ ({ theme }) => theme.color.formBackground };
	border-radius: 27px;
	color: ${ ({ theme }) => theme.color.text };
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 4.5rem;
	}

	fieldset {
		padding: 0 5px;
		border: none;
	
		legend {
			font-weight: bold;
			font-size: 22px;
		}
	}
`;

export const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;

	label {
		font-size: 22px;
		font-weight: bold;
	}
	
	input {
		padding: 5px;
		font-size: 1rem;
		border: none;
		border-radius: 5px;

		&:focus{
			outline: none;
		}
	}

	select {
		padding: 5px;
		font-size: 1rem;
		border: none;
		border-radius: 5px;

		&:focus{
			outline: none;
		}
	}
`;