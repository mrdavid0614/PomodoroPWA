import { Status } from "../types/status";

const pomodoroDurations: Record<Status["id"], number> = {
	"work": 1500,
	"short_break": 300,
	"long_break": 1800
};

export { pomodoroDurations };
