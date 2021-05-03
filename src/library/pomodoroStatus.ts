import { Status } from "../types/status";

const pomodoroStatus: Record<Status["id"], Status> = {
	1: {
		id: 1,
		title: "Work"
	},

	2: {
		id: 2,
		title: "Short Break"
	},

	3: {
		id: 3,
		title: "Long Break"
	},
};

export { pomodoroStatus };
