type ComponentProps = {
    buttonText: 'Start' | 'Pause' | 'Stop' ;
    onClick: () => void;
}

const TimerButton = ({ buttonText, onClick }: ComponentProps) => {

    return (
        <button onClick={onClick}> { buttonText } </button>
    );
}

export { TimerButton };