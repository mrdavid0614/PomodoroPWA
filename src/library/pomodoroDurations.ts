import { Status } from "../types/status";

const pomodoroDurations: Record<Status["id"], number> = {
	"work": 1500,
	"breakShort": 300,
	"breakLong": 1800
};

export { pomodoroDurations };
