import styled from "styled-components";
import { Link } from "react-router-dom";

const SettingsButton = styled(Link)`
    position: absolute;
    top: 20px;
    right: 1rem;
    
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export { SettingsButton };