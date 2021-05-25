import styled from "styled-components";
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
    position: absolute;
    top: 20px;
    left: 1rem;

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

const SettingsButton = styled(Link)`
    position: absolute;
    top: 20px;
    right: 1rem;
    
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

const SettingsForm = styled.form`
    padding: 10px;
    border: 1px solid #000;
    border-radius: 8px;
`;

export { BackButton, SettingsButton, SettingsForm };