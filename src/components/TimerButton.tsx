import { useState } from 'react';

type ComponentProps = {
    action: 'Start' | 'Pause' | 'Stop' ;
    onClick: () => void;
}

const TimerButton = ({ action, onClick }: ComponentProps) => {

    const [actionName, setActionName] = useState(action);

    return (
        <button onClick={onClick}> { actionName } </button>
    );
}

export { TimerButton };