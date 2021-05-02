import { MouseEvent, useState } from 'react';

type ComponentProps = {
    action: 'Start' | 'Pause' | 'Stop' ;
}

const TimerButton = ({ action }: ComponentProps) => {

    const [actionName, setActionName] = useState(action);

    const handleClick = (event: MouseEvent) => {
        console.log(actionName)
    }

    return (
        <button onClick={handleClick}> { actionName } </button>
    );
}

export { TimerButton };