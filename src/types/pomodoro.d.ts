import { Durations } from "./durations";
import { Status } from "./status";

export interface Pomodoro {
    public durations: Durations;
    public numberOfPomodorosCompleted: number;
    public currentStatus: Status;
    public isRunning: boolean;
    public durationLeft: number;

    fetchNextStatus: (currentStatus: Status["id"]) => Status;
    tickTimer: () => void;
    onTimerStart: () => void;
    onTimerPause: () => void;
    onTimerStop: () => void;

}