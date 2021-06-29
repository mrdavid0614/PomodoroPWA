import { Status } from "../types/status";

const pomodoroStatus: Record<Status["id"], Status> = {
	"work": {
		id: "work",
		title: "Work"
	},

	"breakShort": {
		id: "breakShort",
		title: "Short Break"
	},

	"breakLong": {
		id: "breakLong",
		title: "Long Break"
	},
};

export { pomodoroStatus };
