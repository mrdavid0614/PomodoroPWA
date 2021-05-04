import { Status } from "../types/status";

const pomodoroStatus: Record<Status["id"], Status> = {
	"work": {
		id: "work",
		title: "Work"
	},

	"short_break": {
		id: "short_break",
		title: "Short Break"
	},

	"long_break": {
		id: "long_break",
		title: "Long Break"
	},
};

export { pomodoroStatus };
