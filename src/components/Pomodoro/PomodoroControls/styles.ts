import styled from "styled-components";

const PomodoroControls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;

	  svg {
	  	width: 100%;
      height: 100%;
	  }

    &[disabled] {
      cursor: not-allowed;

      svg {
        fill: ${ (props => props.theme.light.color.highlight) }
      }
    }
  }
`;

export { PomodoroControls };
